import langs from '@/data/langs.yaml'

export default {
  data(){
    return {
      langs
    }
  }
}

export const geturl = {
	methods: {
      geturl: function(lang) {
          
          var path = window.location.pathname;
          var iterator = langs.values();
          var curLang;
      
          for (let elements of iterator) { 
            if (path.includes('/' + elements['lang'] + '/')){
              path = path.replace(new RegExp('^\/'+ elements['lang']), '');
            }
          }

          if ( lang ){
            localStorage.lang = lang;
          }

          if ( !localStorage.lang ){
            localStorage.lang = window.navigator.language.split("-")[0];
          }

          return '/' + localStorage.lang + path;
        
        }
    }
}