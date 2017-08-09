(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['navigation'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"pusher\">\n  <div class=\"ui vertical masthead center aligned segment overlay\">\n    <div class=\"ui container\">\n      <div class=\"ui secondary menu\">\n        <a class=\"toc item\">\n          <i class=\"black sidebar icon\"></i>\n        </a>\n        <a href=\"index.html\" class=\""
    + alias4(((helper = (helper = helpers.itemoptionhome || (depth0 != null ? depth0.itemoptionhome : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"itemoptionhome","hash":{},"data":data}) : helper)))
    + "\">Home</a>\n        <a href=\"properties.html\" class=\""
    + alias4(((helper = (helper = helpers.itemoptionproperties || (depth0 != null ? depth0.itemoptionproperties : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"itemoptionproperties","hash":{},"data":data}) : helper)))
    + "\">Properties</a>\n        <a href=\"about.html\" class=\""
    + alias4(((helper = (helper = helpers.itemoptionabout || (depth0 != null ? depth0.itemoptionabout : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"itemoptionabout","hash":{},"data":data}) : helper)))
    + "\">About</a>\n        <a href=\"contact.html\" class=\""
    + alias4(((helper = (helper = helpers.itemoptioncontact || (depth0 != null ? depth0.itemoptioncontact : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"itemoptioncontact","hash":{},"data":data}) : helper)))
    + " right aligned\">Contact</a>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"ui left vertical sidebar labeled icon menu\">\n  <a href=\"index.html\" class=\""
    + alias4(((helper = (helper = helpers.itemoptionhome || (depth0 != null ? depth0.itemoptionhome : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"itemoptionhome","hash":{},"data":data}) : helper)))
    + "\">\n    <i class=\""
    + alias4(((helper = (helper = helpers.colorhome || (depth0 != null ? depth0.colorhome : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"colorhome","hash":{},"data":data}) : helper)))
    + " home icon\"></i>\n    Home\n  </a>\n  <a href=\"properties.html\" class=\""
    + alias4(((helper = (helper = helpers.itemoptionproperties || (depth0 != null ? depth0.itemoptionproperties : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"itemoptionproperties","hash":{},"data":data}) : helper)))
    + "\">\n    <i class=\""
    + alias4(((helper = (helper = helpers.colorproperties || (depth0 != null ? depth0.colorproperties : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"colorproperties","hash":{},"data":data}) : helper)))
    + " list icon\"></i>\n    Properties\n  </a>\n  <a href=\"about.html\" class=\""
    + alias4(((helper = (helper = helpers.itemoptionabout || (depth0 != null ? depth0.itemoptionabout : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"itemoptionabout","hash":{},"data":data}) : helper)))
    + "\">\n    <i class=\""
    + alias4(((helper = (helper = helpers.colorabout || (depth0 != null ? depth0.colorabout : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"colorabout","hash":{},"data":data}) : helper)))
    + " info icon\"></i>\n    About\n  </a>\n<!--   <a href=\"contact.html\" class=\""
    + alias4(((helper = (helper = helpers.itemoptioncontact || (depth0 != null ? depth0.itemoptioncontact : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"itemoptioncontact","hash":{},"data":data}) : helper)))
    + "\">\n    <i class=\""
    + alias4(((helper = (helper = helpers.colorcontact || (depth0 != null ? depth0.colorcontact : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"colorcontact","hash":{},"data":data}) : helper)))
    + " phone icon\"></i>\n    Contact\n  </a> -->\n</div>\n\n\n<!--nav found at https://jsfiddle.net/f8pgk4n5/1/-->\n";
},"useData":true});
templates['person'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"entry\">\n  <h1>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h1>\n  <div class=\"body\">\n    "
    + alias4(((helper = (helper = helpers.body || (depth0 != null ? depth0.body : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"body","hash":{},"data":data}) : helper)))
    + "\n  </div>\n</div>\n";
},"useData":true});
templates['propertiesaccordion'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"ui accordion\">\n  <div class=\""
    + alias4(((helper = (helper = helpers.titlestateapartments || (depth0 != null ? depth0.titlestateapartments : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"titlestateapartments","hash":{},"data":data}) : helper)))
    + "\">\n    <i class=\"dropdown icon\"></i>\n    Apartments\n  </div>\n  <div class=\""
    + alias4(((helper = (helper = helpers.contentstateapartments || (depth0 != null ? depth0.contentstateapartments : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"contentstateapartments","hash":{},"data":data}) : helper)))
    + "\">\n\n    <div class=\"ui list\" >\n      <a class=\"item "
    + alias4(((helper = (helper = helpers.styleeastwoodapts || (depth0 != null ? depth0.styleeastwoodapts : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"styleeastwoodapts","hash":{},"data":data}) : helper)))
    + "\" href=\"eastwood.html\">Eastwood Apts</a>\n      <a class=\"item "
    + alias4(((helper = (helper = helpers.styleriverbluffapts || (depth0 != null ? depth0.styleriverbluffapts : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"styleriverbluffapts","hash":{},"data":data}) : helper)))
    + "\" href=\"index.html\">River Bluff Apts</a>\n      <a class=\"item "
    + alias4(((helper = (helper = helpers.stylewalnutstapts || (depth0 != null ? depth0.stylewalnutstapts : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"stylewalnutstapts","hash":{},"data":data}) : helper)))
    + "\" href=\"index.html\">Walnut St. Apts</a>\n      <a class=\"item "
    + alias4(((helper = (helper = helpers.styleautumnwoodsapts || (depth0 != null ? depth0.styleautumnwoodsapts : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"styleautumnwoodsapts","hash":{},"data":data}) : helper)))
    + "\" href=\"index.html\">Autumn Woods Apts</a>\n      <a class=\"item "
    + alias4(((helper = (helper = helpers.stylecountryclubapts || (depth0 != null ? depth0.stylecountryclubapts : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"stylecountryclubapts","hash":{},"data":data}) : helper)))
    + "\" href=\"index.html\">Country Club Apts</a>\n      <a class=\"item "
    + alias4(((helper = (helper = helpers.styletowneterraceapts || (depth0 != null ? depth0.styletowneterraceapts : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"styletowneterraceapts","hash":{},"data":data}) : helper)))
    + "\" href=\"index.html\">Towne Terrace Apts</a>\n      <a class=\"item "
    + alias4(((helper = (helper = helpers.stylemulberryapts || (depth0 != null ? depth0.stylemulberryapts : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"stylemulberryapts","hash":{},"data":data}) : helper)))
    + "\" href=\"index.html\">Mulberry Apts</a>\n    </div>\n  </div>\n\n  <div class=\""
    + alias4(((helper = (helper = helpers.titlestatehotel || (depth0 != null ? depth0.titlestatehotel : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"titlestatehotel","hash":{},"data":data}) : helper)))
    + "\">\n    <i class=\"dropdown icon\"></i>\n    Hotel\n  </div>\n  <div class=\""
    + alias4(((helper = (helper = helpers.contentstatehotel || (depth0 != null ? depth0.contentstatehotel : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"contentstatehotel","hash":{},"data":data}) : helper)))
    + "\">\n      <a class=\"item "
    + alias4(((helper = (helper = helpers.styleraintreeinn || (depth0 != null ? depth0.styleraintreeinn : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"styleraintreeinn","hash":{},"data":data}) : helper)))
    + "\" href=\"index.html\">Raintree Inn</a>\n  </div>\n\n  <div class=\""
    + alias4(((helper = (helper = helpers.titlestaterestaurants || (depth0 != null ? depth0.titlestaterestaurants : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"titlestaterestaurants","hash":{},"data":data}) : helper)))
    + "\">\n    <i class=\"dropdown icon\"></i>\n    Restaurants\n  </div>\n  <div class=\""
    + alias4(((helper = (helper = helpers.contentstaterestaurants || (depth0 != null ? depth0.contentstaterestaurants : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"contentstaterestaurants","hash":{},"data":data}) : helper)))
    + "\">\n      <a class=\"item "
    + alias4(((helper = (helper = helpers.stylewongsfamilyrestautant || (depth0 != null ? depth0.stylewongsfamilyrestautant : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"stylewongsfamilyrestautant","hash":{},"data":data}) : helper)))
    + "\" href=\"index.html\">Wong's Family Restaurant</a><br>\n      <a class=\"item "
    + alias4(((helper = (helper = helpers.stylejohnnywongschinesebistro || (depth0 != null ? depth0.stylejohnnywongschinesebistro : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"stylejohnnywongschinesebistro","hash":{},"data":data}) : helper)))
    + "\" href=\"index.html\">Johnny Wong's Chinese Bistro</a>\n  </div>\n\n  <div class=\""
    + alias4(((helper = (helper = helpers.titlestatesinglefamilyhomes || (depth0 != null ? depth0.titlestatesinglefamilyhomes : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"titlestatesinglefamilyhomes","hash":{},"data":data}) : helper)))
    + "\">\n    <i class=\"dropdown icon\"></i>\n    Single Family Homes\n  </div>\n  <div class=\""
    + alias4(((helper = (helper = helpers.contentstatesinglefamilyhomes || (depth0 != null ? depth0.contentstatesinglefamilyhomes : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"contentstatesinglefamilyhomes","hash":{},"data":data}) : helper)))
    + "\">\n      <a class=\"item "
    + alias4(((helper = (helper = helpers.stylesinglefamilyhomes || (depth0 != null ? depth0.stylesinglefamilyhomes : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"stylesinglefamilyhomes","hash":{},"data":data}) : helper)))
    + "\" href=\"index.html\">Single Family Homes</a>\n  </div>\n\n  <div class=\""
    + alias4(((helper = (helper = helpers.titlestateofficecomplexes || (depth0 != null ? depth0.titlestateofficecomplexes : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"titlestateofficecomplexes","hash":{},"data":data}) : helper)))
    + "\">\n    <i class=\"dropdown icon\"></i>\n    Office Complexes\n  </div>\n  <div class=\""
    + alias4(((helper = (helper = helpers.contentstateofficecomplexes || (depth0 != null ? depth0.contentstateofficecomplexes : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"contentstateofficecomplexes","hash":{},"data":data}) : helper)))
    + "\">\n      <a class=\"item "
    + alias4(((helper = (helper = helpers.styleprofessionalvillageeastofficecomplex || (depth0 != null ? depth0.styleprofessionalvillageeastofficecomplex : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"styleprofessionalvillageeastofficecomplex","hash":{},"data":data}) : helper)))
    + "\" href=\"index.html\">Professional Village East Office Complex</a>\n  </div>\n\n  <div class=\""
    + alias4(((helper = (helper = helpers.titlestatemobilehomeparks || (depth0 != null ? depth0.titlestatemobilehomeparks : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"titlestatemobilehomeparks","hash":{},"data":data}) : helper)))
    + "\">\n    <i class=\"dropdown icon\"></i>\n    Mobile Home Parks\n  </div>\n  <div class=\""
    + alias4(((helper = (helper = helpers.contentstatemobilehomeparks || (depth0 != null ? depth0.contentstatemobilehomeparks : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"contentstatemobilehomeparks","hash":{},"data":data}) : helper)))
    + "\">\n      <a class=\"item "
    + alias4(((helper = (helper = helpers.stylesherwoodmobilehomepark || (depth0 != null ? depth0.stylesherwoodmobilehomepark : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"stylesherwoodmobilehomepark","hash":{},"data":data}) : helper)))
    + "\" href=\"index.html\">Sherwood Mobile Home Park</a><br>\n      <a class=\"item "
    + alias4(((helper = (helper = helpers.stylebourneendmobilehomepark || (depth0 != null ? depth0.stylebourneendmobilehomepark : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"stylebourneendmobilehomepark","hash":{},"data":data}) : helper)))
    + "\" href=\"index.html\">Bourne End Mobile Home Park</a>\n  </div>\n</div>\n";
},"useData":true});
})();