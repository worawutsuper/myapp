 //manage database
 const database = firebase.database();
 const messageRef=database.ref("message");

 new Vue({
     el:"#comment",
     data:{
         messageText:'vuetext',
         web:'http://www.hotmail.com',
         messages:[],
         name:'vuename',
         editText:null
     },
     methods:{
        storeMessage:function () {
            // this.messages.push({text:this.messageText,name:this.name})
            // console.log(this.messages);
            // this.messageText=''
            messageRef.push({text:this.messageText,name:this.name})
            this.messageText=''
            this.name=''
            // console.log(this.messages);
        },
        deleteMessage:function(m){
            //ลบข้อมูล
            messageRef.child(m.id).remove()
        },
        editMessage:function(m){
            //แก้ข้อมูล
            this.editText=m
            this.messageText=m.text
        },
        cancelMessage:function(){
            //ยกเลิกข้อมูล
            this.editText=null
            this.messageText=''
        },
        updateMessage:function(){
            //อัพเดทข้อมูล
            messageRef.child(this.editText.id).update({text:this.messageText})
            this.cancelMessage()
        }
     },
     created(){
         //messageRef.on('child_added',snapshot=>console.log(snapshot.val()))       
         messageRef.on('child_added',snapshot=>{
             //เอาข้อมูลจาก message มาเก็บในArray
             this.messages.push({...snapshot.val(),id:snapshot.key})
             //console.log(snapshot.key);
         })
         messageRef.on('child_removed',snapshot=>{
            const deleteText=this.messages.find(m=>m.id==snapshot.key)
            const index=this.messages.indexOf(deleteText)
            this.messages.splice(index,1)
        })
        messageRef.on('child_changed',snapshot=>{
            const updateText =this.messages.find(m=>m.id==snapshot.key)
            updateText.text=snapshot.val().text
        })
     }
 })