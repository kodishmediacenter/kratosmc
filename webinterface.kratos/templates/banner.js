var template;if("undefined"===typeof template){template={};}template.banner=JsonML.BST([""," ",["div",{"jbst:visible":function(){return !this.data.items;},"class":"emptylist"},"Empty"]," ",["div",{"jbst:visible":function(){return !!this.data.items;},"class":"banner"}," ",function(){return JsonML.BST(template.listdetails).dataBind(this.data,this.index,this.count);}," ",["ul",{"class":"bannerlist"}," ",function(){return JsonML.BST(template.banneritem).dataBind(this.data.items,this.index,this.count);}," "]," "]]);
