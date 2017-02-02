'use strict';

var Events = (() => {
    let events = {}, cache = {};

    return {
      on(name, fn) {
        if(name instanceof Object){
          for(let k in name){
            this.on(k, name[k])
          }
        }else{
          for(let s of name.split(/\s+/g)){
            if(s in events){
              events[s].push(fn)
            }else{
              events[s] = [fn]
            }
          }
        }
        return this
      },
      off(name, fn) {
        if(!name){
          return this
        }
        if(name instanceof Object){
          for(let k in name){
            this.off(k, name[k])
          }
        }else{
          for(let s of name.split(/\s+/g)){
            if(s in events){
              if(!fn){
                events[s] = null;
                delete events[s];
              }else{
                for(let j=0,o=events[s];j<o.length;j++){
                      if(o[j]==fn){
                        events[s].splice(j,1);
                        j=o.length;
                      }
                  }
              }
            }
          }
        }
        return this
      },
      one(...args) {
        let call = () => {
          args[1].apply(this, args);
          this.off(args[0], call);
        };
        return this.on(args[0], call);
      },
      trigger(name, ...args) {
        for(let n of name.split(/\s+/g)){
          if(!(n in cache)){
            cache[n]=new RegExp("^"+n.replace(/\./g,"\\.")+"\\b");
          };
          for(let j in events)
            if(cache[n].test(j)){
              for(let k=0,o=events[j].slice(0);k<o.length;k++){
                o[k].apply(this, args)
              }
            }
        }
        return this
      }
    }
})();

export default Events
