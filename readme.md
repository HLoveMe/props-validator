
### 数据格式判断，继承于[Prop-Types](https://github.com/facebook/prop-types)
  ```
    源于prop-type,对其进行扩展。并支持自动反向创建验证源。
  ```

## Installation and Usage

- 安装
  ```
  npm i types-format
  ```
- 使用
  ```typescript
  import OV , { Type } from 'types-format';
  const Spec = {
    name:Type.string,
    age:Type.number.isRequired
  }

  const result = OV.checkPropTypes(Spec,{name:'',age:100});
  if(result){ /** 验证错误 */ }
  ```
### API 详细说明
  * 支持更多的数据类型，详情见 index.d.ts

    ```typescript
    any: PropTypes.Requireable<any>;
    array: PropTypes.Requireable<any[]>;
    bool: PropTypes.Requireable<boolean>;
    ...
    int32: PropTypes.Requireable<Int32Array>;
    float32: PropTypes.Requireable<Float32Array>;
    ```
  * 类型验证

    ```typescript
    import OV , { Type } from 'types-format';
    const Spec =  {
      __tag:'',//可选 便于定位问题。
      data: Type.arrayOf(Type.number), // 验证数据- 数组
      people: Type.exact({  // 验证数据- 对象（只有a,b,c,d）并且类型正确
        a: Type.string.isRequired,
        b: Type.any.isRequired,
        c: Type.array.isRequired,
        d: Type.symbol.isRequired
      }).isRequired
    }
    OV.checkPropTypes(Spec,{
        data:[1,2,3],
        people:{
            a:'aa',
            b:NaN,
            c:[],
            d:Symbol.for('')
        }
    })
    ```
  
  * 格式验证错误详细
  
    ```typescript
    import OV , { Type } from 'types-format';
    const error = OV.checkPropTypes({},{})
    Validator Error。 [typeSpec.__tag]:[08ACDacd] => Error: {
      "a": "属性:[a]的值等于['<<anonymous>>'],期待为 number 类型/值，实际类型/值： string .",
      "c": "验证错误：c",
      "f": "属性:[f[0]]的值等于['<<anonymous>>'],期待为 number 类型/值，实际类型/值： symbol ."
    }
    
    1:会显示Spec 的 __tag值[08ACDacd] 以便定位
    2:会提醒验证失败的属性值和期望的格式
    ```
  * extendsValidator 扩展验证

    ```typescript
    import OV , { Type } from 'types-format';
    extendsValidator('isNaN',(props,propsName)=>{
      const value = props[propsName];
      if(isNaN(value)){
        return null
      }
      return  return new Error('必须是NaN');
    })
    
    OV.checkPropTypes({
     some:Type.isNaN,
     other:Type.isNaN.isRequired,
    },{some:NaN,other:1})
    ```

### 工具函数

  ```
  为解决给大型对象(属性过多，层级过深),手写Sepc对象过于繁琐的问题。提供自动生成验证格式对象 PropsPlugin 生成Spec的工具函数
  ```  
    
  - 实例 
    ```typescript
      import OV , { Type } from 'types-format';
      const PropsPlugin = OV.PropsPlugin;
      const Spec = PropsPlugin.getTypeSpec({
        data: [
          [1, 2, 3],
        ],
        data2: [new Date()],
        people: {
          a: '',
          b: null,
          c: [1],
          d: Symbol.for('a'),
          e: () => { },
          f: ['11']
        }
      }, true, { maxDepth: 5, topName: 'HL' });
      // 自动生成验证对象
      `
        {
          __tag:''
          data:HL.arrayOf(HL.number),
          data2:HL.arrayOf(HL.date),
          people:HL.exact({
              a:HL.string.isRequired,
              b:HL.null.isRequired
              c:HL.arrayOf(HL.number).isRequired,
              d:HL.symbol.isRequired,
              e:HL.function.isRequired,
              f:HL.arrayOf(HL.string).isRequired,
          }).isRequired
        }
      `
    ```

  - 扩展工具函数
    ```
     除基础格式（any,array，bool|boolean，func|funcction，number，object:，string，node，element，symbol，elementType，）。其他都可进行覆盖
    ```
    - 增加对类型 Engin 的扩展
      ```typescript
      import OV , { Type } from 'types-format';
      const PropsPlugin = OV.PropsPlugin;
      // 扩展对 Engin 对象的的支持
      class Engin{
        get [Symbol.toStringTag]() {
          return "Engin";
        }
      }
      
      // 扩展类型验证函数
      extendsValidator('isEngin',()=>{
          if(isEngin) return null;
          return new Error('不是Engin 对象')
      })
      
      // 扩展 自动生成验证对象函数
      PropsPlugin.extendsFactory({
          test:(source: any)=>{
          	return Object.prototype.toString.call(source)==='[object Engin]';
          },
          choice: (props: any, propName: string, typeObject: TypeObject): string => 'enginProps',
          execMap:{
              enginProps:(props: any, value: any, isRequire: boolean = false, depth = 0, option: FactoryOption)=>string{
                  if(isRequire){
                      return 'HL.isEngin.isRequired'
                  }else{
                      return 'HL.isEngin'
                  }
              }
          }
      })
      
      // 生成Spec格式验证对象
      const PropsPlugin = OV.PropsPlugin;
      const formatSpec = PropsPlugin.getTypeSpec({data:new Engin()},true,{topName:'Type'})

      `
      const formatSpec = {
        data:Type.isEngin.isRequired
      }
      `
      
      // formatSpec 就可用于对Engin对象的格式验证
      ```

    

### apiUtil 用于包装现有网络请求

  ```javascript
  // 网络请求
  const ApiServe = {
  	getA:async()=>{
  		return {
  			code:200,
  			data:[1,2,3]
  		}
  	},
  	getC:{
  		getC1:async()=>{
  			return {
  				data:[1,2,3,],
  				code:200
  			}
  		},
  		getC2:async()=>{},
  	}
  }
  
  // 增加验证对象
  const ApiSpec={
  	getA:{
  		__tag?:'A',
  		spec:{
  			data:Props.arrayOf(Props.number).isRequired,
  			code:Props.number.isRequired
  		},
  	}
  	getC:{
  		getC1:{
  			__tag?:"B",
  			spec:Props.arrayOf(Props.number).isRequired,
  			handle:res=>res.data
  		},
           getC2:...
  	}
  }
  // 使用
  old : 
  	await ApiServe.getA()
  new : 
    import OV , { Type } from 'types-format';
  	const NApiServe = OV.apiUtil.WrapperApi(ApiServe,ApiSpec)
      // 会对返回数据进行校验。仅仅输出校验结果。不影响其他流程。
    await NApiServe.getA()
    
  ```
  

### 其他API

  * extendsValidator 用于扩展数据检查函数

  * PropsPlugin 生成验证对象 ,可扩展生成的验证对象。见上

  * checkPropTypes 检查格式对象

  * apiUtil 工具函数用于包装接口函数
