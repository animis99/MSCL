let Edit3 = {
    template: `<div>
        <p>
          <div class="col-12" align="center" >
          <a href="javasript:;" v-on:click="updateHandler">更新</a>
          </div>
          <div class="col-12" align="center" >
          <div class="col-10" align="center" >
            <input type="text" v-model.trim="title" style="width:256px; margin-top:40px;">  
            <table class="col-12 text-center">   
                    <thead style="border-bottom:0px solid #555;">
                      <tr class="col-12" style="font-size:20px;">
                        <th class="col-4">html 網址</th>
                        <th class="col-4">html</th>
                      </tr>
                      <div style="height:5px;"></div>
                    </thead>
          </table>
          <div class="col-12" align="center">
          <textarea class="textarea"  v-model.trim="htmlurl" rows="80" cols="60">1
          </textarea >
          <textarea class="textarea"  v-model.trim="html" rows="80" cols="60">
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
          <textarea class="textarea" v-model.trim="css" rows="80" cols="60">
          </textarea >
          <textarea class="textarea"  v-model.trim="javascript" rows="80" cols="60">
          </textarea >
          </div>
          </div>  
          <div class="col-12" align="center" style=" margin-top:40px;">
          </div>          
          </div>  
          </div>  
        </p>
        </div>`,
    data() {
      return {
        title: "",
        htmlurl:"",
        html:"",
        css:"",
        javascript:""
      };
    },
    computed: {
      content() {
        return this.$store.state.contents3.find(item => {
          return item.id == this.$route.params.id;
        });
      }
    },
    methods: {
      updateHandler() {
        this.$store
        .dispatch("CONTENT_UPDATE3", {
            id: this.content.id,
            category:this.category,
            title: this.title,
            htmlurl:this.htmlurl,
            html: this.html,
            css: this.css,
            javascript: this.javascript
        })
        .then(() => {
            this.$router.push({ path: "/" });
        });
      }
    },
    mounted() {
      if (!this.content) return this.$router.replace({ path: "/" });
      this.title = this.content.title;
      this.htmlurl = this.content.htmlurl;
      this.html = this.content.html;
      this.css = this.content.css;
      this.javascript = this.content.javascript;
    }
  };