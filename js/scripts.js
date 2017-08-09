var contextnavigationhome = {itemoptionhome: "active item", itemoptionproperties: "item",  itemoptionabout: "item", itemoptioncontact: "item", colorhome: "grey", colorproperties: "black", colorabout: "black", colorcontact: "black"}
var contextnavigationproperties = {itemoptionhome: "item", itemoptionproperties: "active item", itemoptionabout: "item", itemoptioncontact: "item", colorhome: "black", colorproperties: "grey", colorabout: "black", colorcontact: "black"} 
var contextnavigationabout = {itemoptionhome: "item", itemoptionproperties: "item", itemoptionabout: "active item", itemoptioncontact: "item", colorhome: "black", colorproperties: "black", colorabout: "grey", colorcontact: "black"} 
var contextnavigationcontact = {itemoptionhome: "item", itemoptionproperties: "item", itemoptionabout: "item", itemoptioncontact: "active item", colorhome: "black", colorproperties: "black", colorabout: "black", colorcontact: "grey"} 

var contextpropertiesaccordionnone = {
	styleeastwoodapts: "accordionlink",
	styleriverbluffapts: "accordionlink",
	styleautumnwoodsapts: "accordionlink",
	stylewalnutstapts: "accordionlink",
	stylecountryclubapts: "accordionlink",
	styletowneterraceapts: "accordionlink",
	stylemulberryapts: "accordionlink",
	styleraintreeinn: "accordionlink",
	stylewongsfamilyrestautant: "accordionlink",
	stylejohnnywongschinesebistro: "accordionlink",
	stylesinglefamilyhomes: "accordionlink",
	styleprofessionalvillageeastofficecomplex: "accordionlink",
	stylesherwoodmobilehomepark: "accordionlink",
	stylebourneendmobilehomepark: "accordionlink",

	contentstateapartments: "content",
	titlestateapartments: "title",

	contentstatehotel: "content",
	titlestatehotel: "title",

	contentstaterestaurants: "content",
	titlestaterestaurants: "title",

	contentstatesinglefamilyhomes: "content",
	titlestatesinglefamilyhomes: "title",

	contentstateofficecomplexes: "content",
	titlestateofficecomplexes: "title",

	contentstatemobilehomeparks: "content",
	titlestatemobilehomeparks: "title",
} 
var contextpropertiesaccordioneastwoodapts = {
	styleeastwoodapts: "accordionlinkactive",
	styleriverbluffapts: "accordionlink",
	styleautumnwoodsapts: "accordionlink",
	stylewalnutstapts: "accordionlink",
	stylecountryclubapts: "accordionlink",
	styletowneterraceapts: "accordionlink",
	stylemulberryapts: "accordionlink",
	styleraintreeinn: "accordionlink",
	stylewongsfamilyrestautant: "accordionlink",
	stylejohnnywongschinesebistro: "accordionlink",
	stylesinglefamilyhomes: "accordionlink",
	styleprofessionalvillageeastofficecomplex: "accordionlink",
	stylesherwoodmobilehomepark: "accordionlink",
	stylebourneendmobilehomepark: "accordionlink",

	contentstateapartments: "content active",
	titlestateapartments: "title active",

	contentstatehotel: "content",
	titlestatehotel: "title",

	contentstaterestaurants: "content",
	titlestaterestaurants: "title",

	contentstatesinglefamilyhomes: "content",
	titlestatesinglefamilyhomes: "title",

	contentstateofficecomplexes: "content",
	titlestateofficecomplexes: "title",

	contentstatemobilehomeparks: "content",
	titlestatemobilehomeparks: "title",
} 


// -------------

var resultnavigationhome = Handlebars.templates.navigation(contextnavigationhome);
var resultnavigationproperties = Handlebars.templates.navigation(contextnavigationproperties);
var resultnavigationabout = Handlebars.templates.navigation(contextnavigationabout);
var resultnavigationcontact = Handlebars.templates.navigation(contextnavigationcontact);

var resultpropertiesaccordioneastwoodapts = Handlebars.templates.propertiesaccordion(contextpropertiesaccordioneastwoodapts);
var resultpropertiesaccordionnone = Handlebars.templates.propertiesaccordion(contextpropertiesaccordionnone);

// -------------


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

$(function() {
  $("#propertiesaccordioneastwoodapts").html(resultpropertiesaccordioneastwoodapts);
});
$(function() {
  $("#propertiesaccordionnone").html(resultpropertiesaccordionnone);
});

