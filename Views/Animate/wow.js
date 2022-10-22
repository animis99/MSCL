
let wow = {
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
                  <ul class="nav-menu" v-for="(item2,index) in contents" :key="item2.id">
                    <li v-if="item2.category == NavName">
                      <a :data-scroll="item2.id" v-bind:href="['#' + item2.id]" class="dot">
                        <span>{{ item2.title }}</span>
                      </a>
                    </li>
                  </ul>
                </nav>
                </div>
                
              <div class="contentblock col-md-12 section" v-for="(item,index) in contents" :key="item.id" :id="(item.id)"
              v-if="item.category == NavName"> 
                <div class="ctitle col-md-12" >
                    <h2>{{ item.title }}</h2>
               </div>
               <div class="cweb-background col-md-12""> 
               <div class="cweb col-md-12">
               <iframe frameborder="0"
               noresize="noresize"
               style="position: absolute; background: transparent; width:1200px; height:610px;
               transform: scale(0.65); top:-108px; left:-224px;"
               v-bind:src="item.htmlurl"
               frameborder="0">
               </iframe>
               </div>
               </div>
               <div class="cdownload col-md-12">
                      <table class="col-12 text-center ">   
                        <thead style="border-bottom:1px solid #555;">
                          <tr class="col-12" style="font-size:20px;">
                            <th class="col-4">html</th>
                            <th class="col-4">css</th>
                            <th class="col-4">javascript</th>
                          </tr>
                          <div style="height:5px;"></div>
                        </thead>
                        <div style="height:10px;"></div>
                        <tbody>
                          <tr class="col-12" style="font-size:20px;">
                            <td class="col-4">
                              <button type="button"  class="cbtn btn btn-outline-info "
                              @click="SendMessage(HTMLalert.type, HTMLalert.status)" 
                              v-clipboard:copy="item.html"
                              v-clipboard:success="onCopy"
                              v-clipboard:error="onError">複製</button>  
                            </td>
                            <td class="col-4">
                              <button type="button" class="cbtn btn btn-outline-success"
                              @click="SendMessage(CSSalert.type, CSSalert.status)" 
                              v-clipboard:copy="item.css"
                              v-clipboard:success="onCopy"
                              v-clipboard:error="onError">複製</button>
                            </td>
                            <td class="col-4">
                              <button type="button" class="cbtn btn btn-outline-warning"
                              @click="SendMessage(JavaScriptTalert.type, JavaScriptTalert.status)" 
                              v-clipboard:copy="item.javascript"
                              v-clipboard:success="onCopy"
                              v-clipboard:error="onError">複製</button>
                              </td>
                          </tr>
                        </tbody>  
                      </table>
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
        NavName: "wow.js", 
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
      return this.$store.state.contents.Animate;
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