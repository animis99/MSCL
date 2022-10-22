
let Notes_html = {
    template: `<div>
             
              
                <div class="message-alert">
                <div class=" alert alert-dismissible" :class="'alert-' + item.status"
                  v-for="(item, index) in messages" :key="index">
                  {{ item.message }}
                  <button type="button"  class="btn"  aria-label="Close" @click="removeMessage(index)">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                </div> 
            
              <div class="scrollspy-title">
                  快速導覽
              </div>     
              <div class="webcontent col-md-8" >
                <div class="test test-1" > 
                  <nav id="navbar" class="navbar" >
                  <ul class="nav-menu" v-for="(item2,index) in contents" :key="item2.id"
                  v-if="item2.category == NavName">
                    <li>
                      <a :data-scroll="item2.id" v-bind:href="['#' + item2.id]" class="dot">
                        <span>{{ item2.title }}</span>
                      </a>
                    </li>
                  </ul>
                </nav>
                </div>
             
                <div class="c-text-homepage col-md-12">
                <div class="c-text-homepage col-md-12 " v-for="(item,index) in contents" :key="item.id" :id="(item.id)"
                v-if="item.category == NavName"> 
                  <div class="c-text-title col-md-12" >
                    <h2>{{ item.title }}</h2>
                  </div>
                  <div class="c-text-blank col-md-10 offset-md-1"> 
                  </div>   
                  <div class="row col-md-12">
                  <div class="c-text-content col-md-10 offset-md-1" v-html="">                   
                      <b:includable>{{item.html}}</b:includable>
                  </div>
                  <div class=" col-md-1 ">
                  </div>
                  </div>
              </div>
              </div>
              <div class="cfooter col-md-7" >
              </div>
              </div>
              </div>`,
    data: function (){
      return {
        HTMLalert: { type: "HTML 已複製", status: "light" },
        CSSalert: { type: "CSS 已複製", status: "success" },
        JavaScriptTalert: { type: "JavaScript 已複製", status: "warning" },
        NavName: "html", 
      };
    },
    methods: {
      SendMessage(type, status) {
        this.$store.dispatch("updateMessage", { message: type, status: status }); 
        console.log(status);
        // this.$alertcolor.push(status);
      },
      removeMessage () {
        this.$store.dispatch("removeMessage", { }); 
      },
      onCopy: e => {
        // alert('你成功复制了: ' + e.text)
    },
    //复制失败的回调
    onError: e => {
        alert('复制失败')
    }
    },
    computed:{
      contents() {
      return this.$store.state.contents.Notes;
    },
    messages() {
      return this.$store.state.messages;
    }
    },
    mounted(){  
      this.$store.dispatch("CONTENTS_READ"); 
      // const {title, html, css, javascript} = dbJson;
      // console.log('title',title);
      // console.log('html',html);
      // console.log('css',css);
      // console.log('javascript',javascript);
    }
  };