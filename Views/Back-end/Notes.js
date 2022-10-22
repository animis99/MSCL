let Notes = {
  template: `<div align="center">
      <div class="content col-10"  v-for="(inform,index) in informs" :key="inform.id">
      <p>
        <div class="title col-12" >
          <h1>{{ inform.category }}</h1>
        </div>
        <div class="col-12" style="margin-left:0%;">
        <input type="text" v-model.trim="inform.title" style="width:256px; margin-bottom:5px;">
        <a href="javasript:;" v-on:click="createHandler(inform.method,inform.category,
        inform.title,inform.htmlurl,inform.html,inform.css,inform.javascript)">新增</a>
        </div>
       
        <table class="col-12 text-center">   
                  <thead style="border-bottom:0px solid #555;">
                    <tr class="col-12" style="font-size:20px;">
                      <th class="col-4">html 網址</th>
                      <th class="col-4">文章內容</th>
                    </tr>
                    <div style="height:5px;"></div>
                  </thead>
        </table>
        <div class="col-12" align="center">
        <textarea class="textarea"  v-model.trim="inform.htmlurl" rows="80" cols="60">
        </textarea >
        <textarea class="textarea"  v-model.trim="inform.html" rows="80" cols="60">
        </textarea >
        <table class="col-12 text-center">   
                  <thead style="border-bottom:0px solid #555;">
                    <tr class="col-12" style="font-size:20px;">
                      <th class="col-4">css</th>
                      <th class="col-4">javascript</th>
                    </tr>
                    <div style="height:5px;"></div>
                  </thead>
        </table>
        </div>
        <div class="col-12" align="center">
        <textarea class="textarea" v-model.trim="inform.css" rows="10" cols="60">
        </textarea >
        <textarea class="textarea"  v-model.trim="inform.javascript" rows="10" cols="60">
        </textarea >
        </div>
      </p>
      
      <div class="itemblock col-12" align="left">
      <ol>
        <li  v-for="(item,index) in contents" :key="item.id" v-if="item.category == inform.category" >
          {{ item.title }} 
          <a href="javascript:;" v-on:click="updateHandler(index)">更新</a>
          <a href="javascript:;" v-on:click="deleteHandler(index)">刪除</a>
        </li>
      </ol>
      </div>
      </div>
    </div>`,
  data: function() {
    return {
      informs:[{method:"createHandler",category:"html", title: "" , html:"", css:"", javascript:""},
      {method:"createHandler",category:"css", title: "" , html:"", css:"", javascript:""},
      {method:"createHandler",category:"scss", title: "" , html:"", css:"", javascript:""},
      {method:"createHandler",category:"vue", title: "" , html:"", css:"", javascript:""},
      {method:"createHandler",category:"git - github", title: "" , html:"", css:"", javascript:""}],  
      
      title: "", html:"", css:"", javascript:""
    };
  },
  computed: {
    contents() {
      return this.$store.state.contents4;
    }
  },
  methods: {
    gotoHandler(method, category, title, htmlurl, html, css, javascript) {
      //this=> vue
      this.createHandler(method, category, title, htmlurl, html, css, javascript);
    },
    createHandler(method, category, title, htmlurl, html, css, javascript){
      if (!title) return false;
      axios
        .post("http://localhost:3000/Notes", {
          category:category,
          title:title,
          htmlurl:htmlurl,
          html:html,
          css:css,
          javascript:javascript
        })
        .then(res => {
          this.informs.title = "";
          // this.contents.push(res.data)
          this.$store.commit("addContent4", res.data);
        });
    },
    deleteHandler(index) {
      let target = this.contents[index];
      console.log('delete4', target.id);
      // axios.delete(`http://localhost:3000/contents/${target.id}`).then((res) => {
      //   this.contents.splice(index, 1)
      // })
      this.$store.dispatch("CONTENT_DELETE4", { target });
    },
    updateHandler(index) {
      console.log('路徑4');
      let target = this.contents[index];
     
      // this.$router.push({ path: `/update/${target.id}` })
      this.$router.push({ name: "update4", params: { id: target.id } });
      // this.$router.replace({ path: '/update/' + target.id })
    }
  },
  mounted() {
    //superagent
    // axios.get('http://localhost:3000/contents').then((res) => {
    //   this.contents = res.data
    // })
  }
};