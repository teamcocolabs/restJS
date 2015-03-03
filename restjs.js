/*
	Author: Team CocoLabs
	Date: 03/03/2015
*/

(function(w)
{
  
  function restJS(url)
  {
    this.ajax = true;
    this.xhr = new XMLHttpRequest();
    this.url = url;
    this.ajax_state = function(f1,f2)
    {
      var self = this.xhr;
      return function(){

        if(self.status==200)
          {
            var json = JSON.parse(self.responseText);
                json.error = false;
                f1(json);
          }
          else
            {
              f2(self);
            }
      };
    };
   
    this.get = function(object,sCallback,eCallback)
    {
      this.xhr.open('GET', this.url, true);
      this.xhr.onreadystatechange = this.ajax_state(sCallback,eCallback);
      this.xhr.send();
    };
  }
  
  restJS.prototype.post = function()
  {
    console.log(this); 
    return 1;
  };
  
  w.restJS = restJS;

})(window);



