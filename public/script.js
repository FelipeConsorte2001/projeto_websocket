new Vue({
    el: '#editor',
    data:{
        editor: '',
    },
    computed:{
        preview: function(){
            return  marked.parse(this.editor)
        }
    }
})
