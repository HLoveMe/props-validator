继承'prop-types' ,提供更全的数据验证
=====

* [Prop-Types-链接](https://github.com/facebook/prop-types)

* 支持的类型 验证

  ```js
  
  any: PropTypes.Requireable<any>;
  array: PropTypes.Requireable<any[]>;
  bool: PropTypes.Requireable<boolean>;
  func: PropTypes.Requireable<(...args: any[]) => any>;
  number: PropTypes.Requireable<number>;
  object: PropTypes.Requireable<object>;
  string: PropTypes.Requireable<string>;
  node: PropTypes.Requireable<ReactNodeLike>;
  element: PropTypes.Requireable<ReactElementLike>;
  symbol: PropTypes.Requireable<symbol>;
  elementType: PropTypes.Requireable<ReactComponentLike>;
  
  //重命名
  boolean: PropTypes.Requireable<boolean>;
  function: PropTypes.Requireable<Function>;
  //add:date
  dateString: PropTypes.Requireable<DateString>;
  date: PropTypes.Requireable<DateStamp | DateString>;
  //promise
  promise: PropTypes.Requireable<Promise<any>>;
  // null undefined
  null: PropTypes.Requireable<null>;
  undefined: PropTypes.Requireable<undefined>;
  //add:typedArray
  uint8: PropTypes.Requireable<Uint8Array>;
  uint8clamped: PropTypes.Requireable<Uint8ClampedArray>;
  uint16: PropTypes.Requireable<Uint16Array>;
  uint32: PropTypes.Requireable<Uint32Array>;
  int8: PropTypes.Requireable<Int8Array>;
  int16: PropTypes.Requireable<Int16Array>;
  int32: PropTypes.Requireable<Int32Array>;
  float32: PropTypes.Requireable<Float32Array>;
  float64: PropTypes.Requireable<Float64Array>;
  buffer: PropTypes.Requireable<ArrayBuffer>;
  dataview: PropTypes.Requireable<DataView>;
  // BigInt
  bigint: PropTypes.Requireable<bigint>;
  ```
  * 类型验证

    ```javascript
    import WsPropsType from '../index';
    const Spec =  {
      __tag:''
      data: WsPropsType.arrayOf(WsPropsType.number), // 验证数据- 数组
      people: WsPropsType.exact({  // 验证数据- 对象（只有a,b,c,d）并且类型正确
        a: WsPropsType.string.isRequired,
        b: WsPropsType.any.isRequired,
        c: WsPropsType.array.isRequired,
        d: WsPropsType.symbol.isRequired
      }).isRequired
    }
    WsPropsType.checkPropTypes(Spec,{
        data:[1,2,3],
        people:{
            a:'aa',
            b:NaN,
            c:[],
            d:Symbol.for('')
        }
    })
    ```

  * extendsValidator 扩展验证

    ```javascript
    extendsValidator('isNaN',(props,propsName)=>{
      const value = props[propsName];
      if(isNaN(value)){
        return null
      }
      return  return new Error('必须是NaN');
    })
    
    checkPropTypes({
     some:Props.isNaN,
     other:Props.isNaN.isRequired,
    },{some:NaN,other:1})
    ```

    

* 自动生成验证格式对象 PropsPlugin 。为解决给大型对象(属性过多，层级过深)，生成Spec的工具函数

  ​	

  ```javascript
  import WsPropsType from '..';
  const PropsPlugin = WsPropsType.PropsPlugin;
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
  }, true, { maxDepth: 5, topName: 'HL' })
  ========>
  {
      __tag:''
      data:HL.arrayOf(HL.number),
      data2:HL.arrayOf(HL.date),
      people:WsPropsType.exact({
          a:HL.string.isRequired,
          b:HL.null.isRequired
          c:HL.arrayOf(HL.number).isRequired,
          d:HL.symbol.isRequired,
          e:HL.function.isRequired,
          f:HL.arrayOf(HL.string).isRequired,
      }).isRequired
  }
  ```

  * 扩展 除基础格式（any,array，bool|boolean，func|funcction，number，object:，string，node，element，symbol，elementType，）。其他都可进行覆盖

    ```javascript
    import WsPropsType from '..';
    const PropsPlugin = WsPropsType.PropsPlugin;
    
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
    PropsPlugin.extendsFactory(()=>{
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
    const PropsPlugin = WsPropsType.PropsPlugin;
    const formatSpec = PropsPlugin.getTypeSpec(new Engin(),true,{topName:'HL'})
    =====>
    const formatSpec = HL.isEngin.isRequired
    // formatSpec 就可用于对Engin对象的格式验证
    ```

    

* apiUtil 用于包装现有网络请求

  ```javascript
  // 网络请求
  const Apiserver = {
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
  // 具体对象getA：可有 PropsPlugin.getTypeSpec自动生成 
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
  	await Apiserver.getA()
  new : 
  	import WsPropsType from '..';
  	const PropsPlugin = WsPropsType.PropsPlugin;
  	const NewApiserver = PropsPlugin.api.WrapperApi(Apiserver,ApiSpec)
      // 会对返回数据进行校验。仅仅输出校验结果。不影响其他流程。
      await NewApiserver.getA()
  ```

* 格式验证错误详细

  ```javascript
  Validator Error。 [typeSpec.__tag]:[08ACDacd] => Error: {
    "a": "属性:[a]的值等于['<<anonymous>>'],期待为 number 类型/值，实际类型/值： string .",
    "c": "验证错误：c",
    "f": "属性:[f[0]]的值等于['<<anonymous>>'],期待为 number 类型/值，实际类型/值： symbol ."
  }
  
  1:会显示Spec 的 __tag值[08ACDacd] 以便定位
  2:会提醒验证失败的属性值和期望的格式
  ```

* Promise扩展

  ```javascript
  /**
  *  1:增加validator(typeSpec,handle):Promise
  *  2：生产环境不会生效。仅仅进行数据格式校验。
  **/
  function getData(){
      return fetch()
          .then(d=>d.json())
          .validator({
          	__tag:"",
          	code:WS.number.isRequired,
          	data:WS.arrayOf(WS.number)
      	},data=>data)
         .then()
  }
  ```

  

* API

  * setEnv 设置环境 development 会进行格式检查。production 不会进行格式检查

  * extendsValidator 用于扩展数据检查函数

  * PropsPlugin 生成验证对象 ,可扩展生成的验证对象。见上

  * checkPropTypes 检查格式对象

  * apiUtil 工具函数用于包装接口函数

    

* dome   src/Test