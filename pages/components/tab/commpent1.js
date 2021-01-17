// commpent/commpent1.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list_2:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
   
  },

  /**
   * 组件的方法列表
   */
  methods: {
    bind_active(e){
     // console.log(e)
      const index = e.target.dataset.index
      //调用父元素的方法
      this.triggerEvent('chider',index)
      /*
      不能直接修改父组件传递的元素，还是直接让父组件修改，修改后子组件也会变 
        const {list_2} = this.data //对象解构
      list_2.forEach((v,i)=>{
       // console.log(v,i)
       index===i?v.active=true:v.active=false
      })
      this.setData({
        list_2
      })
      */
    }
  }
})
