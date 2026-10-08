migrate((app) => {
  let collection;
  try { collection = app.findCollectionByNameOrId('enquiries'); } catch (_) {
    collection = new Collection({name:'enquiries',type:'base',listRule:null,viewRule:null,createRule:'',updateRule:null,deleteRule:null,fields:[{name:'name',type:'text',required:true,max:200},{name:'email',type:'email',required:true},{name:'company',type:'text',max:200},{name:'phone',type:'text',max:200},{name:'service',type:'text',required:true,max:200},{name:'details',type:'text',required:true,min:10,max:10000},{name:'created',type:'autodate',onCreate:true,onUpdate:false},{name:'updated',type:'autodate',onCreate:true,onUpdate:true}]});
    app.save(collection);
  }
}, (app) => { const collection=app.findCollectionByNameOrId('enquiries'); app.delete(collection); });
