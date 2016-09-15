    Template.reactiveForm2.onCreated(function(){
           this.tplDict = new ReactiveDict();
            this.tplDict.set('showExtraFields',false);
        }
    )
    Template.reactiveForm2.helpers({
        isShow:function(){
            return Template.instance().tplDict.get('showExtraFields');
        }
    })
    Template.reactiveForm2.events({
        'change select':function(event  ,template){
            if($(event.target).val() ===  "show"){
                template.tplDict.set('showExtraFields',true);
            }else{
                template.tplDict.set('showExtraFields',false);
            }
        }
    })