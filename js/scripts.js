// var contextfooter = {test: "hello"} 
var contextfooter = {description: "Lorum ipsum shit i dont wanna write right nowLorum ipsum shit i dont wanna write right now Lorum ipsum shit i dont wanna write right no."} 

var contextnavigationhome = {itemoptionhome: "active item", itemoptionproperties: "item",  itemoptionabout: "item", itemoptioncontact: "item", colorhome: "grey", colorproperties: "black", colorabout: "black", colorcontact: "black"}
var contextnavigationproperties = {itemoptionhome: "item", itemoptionproperties: "active item", itemoptionabout: "item", itemoptioncontact: "item", colorhome: "black", colorproperties: "grey", colorabout: "black", colorcontact: "black"} 
var contextnavigationabout = {itemoptionhome: "item", itemoptionproperties: "item", itemoptionabout: "active item", itemoptioncontact: "item", colorhome: "black", colorproperties: "black", colorabout: "grey", colorcontact: "black"} 
var contextnavigationcontact = {itemoptionhome: "item", itemoptionproperties: "item", itemoptionabout: "item", itemoptioncontact: "active item", colorhome: "black", colorproperties: "black", colorabout: "black", colorcontact: "grey"} 

// -------------

var resultfooter = Handlebars.templates.footer(contextfooter);

var resultnavigationhome = Handlebars.templates.navigation(contextnavigationhome);
var resultnavigationproperties = Handlebars.templates.navigation(contextnavigationproperties);
var resultnavigationabout = Handlebars.templates.navigation(contextnavigationabout);
var resultnavigationcontact = Handlebars.templates.navigation(contextnavigationcontact);


// -------------

$(function() {
  $("#footer").html(resultfooter);
});


$(function() {
  $("#navigationhome").html(resultnavigationhome);
});
$(function() {
  $("#navigationproperties").html(resultnavigationproperties);
});
$(function() {
  $("#navigationabout").html(resultnavigationabout);
});
$(function() {
  $("#navigationcontact").html(resultnavigationcontact);
});


// -------------
// -------------
// -------------



var contextpropertiesaccordionnone = {
	styleeastwoodapts: "accordionlink",
	styleriverbluffapts: "accordionlink",
	styleautumnwoodsapts: "accordionlink",
	stylewalnutstapts: "accordionlink",
	stylewongsfamilyrestaurant: "accordionlink",
	stylejohnnywongschinesebistro: "accordionlink",
	stylesinglefamilyhomes: "accordionlink",
	styleprofessionalvillageeastofficecomplex: "accordionlink",

	contentstateapartments: "content",
	titlestateapartments: "title",

	contentstaterestaurants: "content",
	titlestaterestaurants: "title",

	contentstatesinglefamilyhomes: "content",
	titlestatesinglefamilyhomes: "title",

	contentstateofficecomplexes: "content",
	titlestateofficecomplexes: "title",
} 
var contextpropertiesaccordioneastwoodapts = {
	styleeastwoodapts: "accordionlinkactive",
	styleriverbluffapts: "accordionlink",
	styleautumnwoodsapts: "accordionlink",
	stylewalnutstapts: "accordionlink",
	stylewongsfamilyrestaurant: "accordionlink",
	stylejohnnywongschinesebistro: "accordionlink",
	stylesinglefamilyhomes: "accordionlink",
	styleprofessionalvillageeastofficecomplex: "accordionlink",

	contentstateapartments: "content active",
	titlestateapartments: "title active",

	contentstaterestaurants: "content",
	titlestaterestaurants: "title",

	contentstatesinglefamilyhomes: "content",
	titlestatesinglefamilyhomes: "title",

	contentstateofficecomplexes: "content",
	titlestateofficecomplexes: "title",
} 
var contextpropertiesaccordionriverbluffapts = {
	styleeastwoodapts: "accordionlink",
	styleriverbluffapts: "accordionlinkactive",
	styleautumnwoodsapts: "accordionlink",
	stylewalnutstapts: "accordionlink",
	stylewongsfamilyrestaurant: "accordionlink",
	stylejohnnywongschinesebistro: "accordionlink",
	stylesinglefamilyhomes: "accordionlink",
	styleprofessionalvillageeastofficecomplex: "accordionlink",

	contentstateapartments: "content active",
	titlestateapartments: "title active",

	contentstaterestaurants: "content",
	titlestaterestaurants: "title",

	contentstatesinglefamilyhomes: "content",
	titlestatesinglefamilyhomes: "title",

	contentstateofficecomplexes: "content",
	titlestateofficecomplexes: "title",
} 
var contextpropertiesaccordionwalnutstapts = {
	styleeastwoodapts: "accordionlink",
	styleriverbluffapts: "accordionlink",
	styleautumnwoodsapts: "accordionlink",
	stylewalnutstapts: "accordionlinkactive",
	stylewongsfamilyrestaurant: "accordionlink",
	stylejohnnywongschinesebistro: "accordionlink",
	stylesinglefamilyhomes: "accordionlink",
	styleprofessionalvillageeastofficecomplex: "accordionlink",

	contentstateapartments: "content active",
	titlestateapartments: "title active",

	contentstaterestaurants: "content",
	titlestaterestaurants: "title",

	contentstatesinglefamilyhomes: "content",
	titlestatesinglefamilyhomes: "title",

	contentstateofficecomplexes: "content",
	titlestateofficecomplexes: "title",
} 

// -------------

var resultpropertiesaccordioneastwoodapts = Handlebars.templates.propertiesaccordion(contextpropertiesaccordioneastwoodapts);
var resultpropertiesaccordionnone = Handlebars.templates.propertiesaccordion(contextpropertiesaccordionnone);
var resultpropertiesaccordionriverbluffapts = Handlebars.templates.propertiesaccordion(contextpropertiesaccordionriverbluffapts);
var resultpropertiesaccordionwalnutstapts = Handlebars.templates.propertiesaccordion(contextpropertiesaccordionwalnutstapts);

// -------------

$(function() {
  $("#propertiesaccordioneastwoodapts").html(resultpropertiesaccordioneastwoodapts);
});
$(function() {
  $("#propertiesaccordionnone").html(resultpropertiesaccordionnone);
});
$(function() {
  $("#propertiesaccordionriverbluffapts").html(resultpropertiesaccordionriverbluffapts);
});
$(function() {
  $("#propertiesaccordionwalnutstapts").html(resultpropertiesaccordionwalnutstapts);
});


// var contextpropertiesaccordionnone = {
// 	styleeastwoodapts: "accordionlink",
// 	styleriverbluffapts: "accordionlink",
// 	styleautumnwoodsapts: "accordionlink",
// 	stylewalnutstapts: "accordionlink",
// 	stylecountryclubapts: "accordionlink",
// 	styletowneterraceapts: "accordionlink",
// 	stylemulberryapts: "accordionlink",
// 	styleraintreeinn: "accordionlink",
// 	stylewongsfamilyrestautant: "accordionlink",
// 	stylejohnnywongschinesebistro: "accordionlink",
// 	stylesinglefamilyhomes: "accordionlink",
// 	styleprofessionalvillageeastofficecomplex: "accordionlink",
// 	stylesherwoodmobilehomepark: "accordionlink",
// 	stylebourneendmobilehomepark: "accordionlink",

// 	contentstateapartments: "content",
// 	titlestateapartments: "title",

// 	contentstatehotel: "content",
// 	titlestatehotel: "title",

// 	contentstaterestaurants: "content",
// 	titlestaterestaurants: "title",

// 	contentstatesinglefamilyhomes: "content",
// 	titlestatesinglefamilyhomes: "title",

// 	contentstateofficecomplexes: "content",
// 	titlestateofficecomplexes: "title",

// 	contentstatemobilehomeparks: "content",
// 	titlestatemobilehomeparks: "title",
// } 
// var contextpropertiesaccordioneastwoodapts = {
// 	styleeastwoodapts: "accordionlinkactive",
// 	styleriverbluffapts: "accordionlink",
// 	styleautumnwoodsapts: "accordionlink",
// 	stylewalnutstapts: "accordionlink",
// 	stylecountryclubapts: "accordionlink",
// 	styletowneterraceapts: "accordionlink",
// 	stylemulberryapts: "accordionlink",
// 	styleraintreeinn: "accordionlink",
// 	stylewongsfamilyrestautant: "accordionlink",
// 	stylejohnnywongschinesebistro: "accordionlink",
// 	stylesinglefamilyhomes: "accordionlink",
// 	styleprofessionalvillageeastofficecomplex: "accordionlink",
// 	stylesherwoodmobilehomepark: "accordionlink",
// 	stylebourneendmobilehomepark: "accordionlink",

// 	contentstateapartments: "content active",
// 	titlestateapartments: "title active",

// 	contentstatehotel: "content",
// 	titlestatehotel: "title",

// 	contentstaterestaurants: "content",
// 	titlestaterestaurants: "title",

// 	contentstatesinglefamilyhomes: "content",
// 	titlestatesinglefamilyhomes: "title",

// 	contentstateofficecomplexes: "content",
// 	titlestateofficecomplexes: "title",

// 	contentstatemobilehomeparks: "content",
// 	titlestatemobilehomeparks: "title",
// } 
// var contextpropertiesaccordionriverbluffapts = {
// 	styleeastwoodapts: "accordionlink",
// 	styleriverbluffapts: "accordionlinkactive",
// 	styleautumnwoodsapts: "accordionlink",
// 	stylewalnutstapts: "accordionlink",
// 	stylecountryclubapts: "accordionlink",
// 	styletowneterraceapts: "accordionlink",
// 	stylemulberryapts: "accordionlink",
// 	styleraintreeinn: "accordionlink",
// 	stylewongsfamilyrestautant: "accordionlink",
// 	stylejohnnywongschinesebistro: "accordionlink",
// 	stylesinglefamilyhomes: "accordionlink",
// 	styleprofessionalvillageeastofficecomplex: "accordionlink",
// 	stylesherwoodmobilehomepark: "accordionlink",
// 	stylebourneendmobilehomepark: "accordionlink",

// 	contentstateapartments: "content active",
// 	titlestateapartments: "title active",

// 	contentstatehotel: "content",
// 	titlestatehotel: "title",

// 	contentstaterestaurants: "content",
// 	titlestaterestaurants: "title",

// 	contentstatesinglefamilyhomes: "content",
// 	titlestatesinglefamilyhomes: "title",

// 	contentstateofficecomplexes: "content",
// 	titlestateofficecomplexes: "title",

// 	contentstatemobilehomeparks: "content",
// 	titlestatemobilehomeparks: "title",
// } 
// var contextpropertiesaccordionwalnutstapts = {
// 	styleeastwoodapts: "accordionlink",
// 	styleriverbluffapts: "accordionlink",
// 	styleautumnwoodsapts: "accordionlink",
// 	stylewalnutstapts: "accordionlinkactive",
// 	stylecountryclubapts: "accordionlink",
// 	styletowneterraceapts: "accordionlink",
// 	stylemulberryapts: "accordionlink",
// 	styleraintreeinn: "accordionlink",
// 	stylewongsfamilyrestautant: "accordionlink",
// 	stylejohnnywongschinesebistro: "accordionlink",
// 	stylesinglefamilyhomes: "accordionlink",
// 	styleprofessionalvillageeastofficecomplex: "accordionlink",
// 	stylesherwoodmobilehomepark: "accordionlink",
// 	stylebourneendmobilehomepark: "accordionlink",

// 	contentstateapartments: "content active",
// 	titlestateapartments: "title active",

// 	contentstatehotel: "content",
// 	titlestatehotel: "title",

// 	contentstaterestaurants: "content",
// 	titlestaterestaurants: "title",

// 	contentstatesinglefamilyhomes: "content",
// 	titlestatesinglefamilyhomes: "title",

// 	contentstateofficecomplexes: "content",
// 	titlestateofficecomplexes: "title",

// 	contentstatemobilehomeparks: "content",
// 	titlestatemobilehomeparks: "title",
// } 

// // -------------

// var resultpropertiesaccordioneastwoodapts = Handlebars.templates.propertiesaccordion(contextpropertiesaccordioneastwoodapts);
// var resultpropertiesaccordionnone = Handlebars.templates.propertiesaccordion(contextpropertiesaccordionnone);
// var resultpropertiesaccordionriverbluffapts = Handlebars.templates.propertiesaccordion(contextpropertiesaccordionriverbluffapts);
// var resultpropertiesaccordionwalnutstapts = Handlebars.templates.propertiesaccordion(contextpropertiesaccordionwalnutstapts);

// // -------------

// $(function() {
//   $("#propertiesaccordioneastwoodapts").html(resultpropertiesaccordioneastwoodapts);
// });
// $(function() {
//   $("#propertiesaccordionnone").html(resultpropertiesaccordionnone);
// });
// $(function() {
//   $("#propertiesaccordionriverbluffapts").html(resultpropertiesaccordionriverbluffapts);
// });
// $(function() {
//   $("#propertiesaccordionwalnutstapts").html(resultpropertiesaccordionwalnutstapts);
// });
