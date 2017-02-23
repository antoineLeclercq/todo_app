this["JST"] = this["JST"] || {};

this["JST"]["all_todos_categories"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<header>\n<h2 class=\"all category\">All Todos</h2>\n<p class=\"count\">"
    + container.escapeExpression(((helper = (helper = helpers.count || (depth0 != null ? depth0.count : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"count","hash":{},"data":data}) : helper)))
    + "</p>\n</header>\n"
    + ((stack1 = container.invokePartial(partials.category_todos,depth0,{"name":"category_todos","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"usePartial":true,"useData":true});

this["JST"]["category_todos"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<li>\n<a class=\"todo-list\" href=\"#\">\n<h3 class=\"category\">"
    + alias4(((helper = (helper = helpers.category || (depth0 != null ? depth0.category : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"category","hash":{},"data":data}) : helper)))
    + "</h3>\n<p class=\"count\">"
    + alias4(((helper = (helper = helpers.count || (depth0 != null ? depth0.count : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"count","hash":{},"data":data}) : helper)))
    + "</p>\n</a>\n</li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<ul>\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.todosCountByCategory : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul>\n";
},"useData":true});

this["JST"]["completed_todos_categories"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<header>\n<h2 class=\"completed category\">Completed</h2>\n<p class=\"count\">"
    + container.escapeExpression(((helper = (helper = helpers.count || (depth0 != null ? depth0.count : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"count","hash":{},"data":data}) : helper)))
    + "</p>\n</header>\n"
    + ((stack1 = container.invokePartial(partials.category_todos,depth0,{"name":"category_todos","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"usePartial":true,"useData":true});

this["JST"]["todo_form"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "data-id=\""
    + container.escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"id","hash":{},"data":data}) : helper)))
    + "\"\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper;

  return "value=\""
    + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"name","hash":{},"data":data}) : helper)))
    + "\"\n";
},"5":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<option value=\""
    + alias4(((helper = (helper = helpers.day || (depth0 != null ? depth0.day : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"day","hash":{},"data":data}) : helper)))
    + "\" selected>"
    + alias4(((helper = (helper = helpers.day || (depth0 != null ? depth0.day : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"day","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"7":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<option value=\""
    + alias4(((helper = (helper = helpers.month || (depth0 != null ? depth0.month : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"month","hash":{},"data":data}) : helper)))
    + "\" selected>"
    + alias4(((helper = (helper = helpers.month || (depth0 != null ? depth0.month : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"month","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"9":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<option value=\""
    + alias4(((helper = (helper = helpers.year || (depth0 != null ? depth0.year : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"year","hash":{},"data":data}) : helper)))
    + "\" selected>"
    + alias4(((helper = (helper = helpers.year || (depth0 != null ? depth0.year : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"year","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"11":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"description","hash":{},"data":data}) : helper)))
    + "\n";
},"13":function(container,depth0,helpers,partials,data) {
    return "<input class=\"mark-complete\" type=\"submit\" value=\"Mark As Complete\" formaction=\"#\">";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "<div id=\"modal\"></div>\n<form class=\"todo-details\" action=\"#\" method=\"post\"\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.id : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\n<fieldset>\n<dl>\n<dt>\n<label for=\"title\">Title</label>\n</dt><!--\n--><dd>\n<input id=\"title\" type=\"text\" name=\"name\" placeholder=\"Title\"\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.name : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\n</dd>\n</dl>\n</fieldset>\n<fieldset>\n<dl class=\"date\">\n<dt>\n<label for=\"day\">Due Date</label>\n</dt><!--\n--><dd>\n<select id=\"day\" name=\"day\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.day : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<option value=\"\">Day</option>\n<option value=\"1\">1</option>\n<option value=\"2\">2</option>\n<option value=\"3\">3</option>\n<option value=\"4\">4</option>\n<option value=\"5\">5</option>\n<option value=\"6\">6</option>\n<option value=\"7\">7</option>\n<option value=\"8\">8</option>\n<option value=\"9\">9</option>\n<option value=\"10\">10</option>\n<option value=\"11\">11</option>\n<option value=\"12\">12</option>\n<option value=\"13\">13</option>\n<option value=\"14\">14</option>\n<option value=\"15\">15</option>\n<option value=\"16\">16</option>\n<option value=\"17\">17</option>\n<option value=\"18\">18</option>\n<option value=\"19\">19</option>\n<option value=\"20\">20</option>\n<option value=\"21\">21</option>\n<option value=\"22\">22</option>\n<option value=\"23\">23</option>\n<option value=\"24\">24</option>\n<option value=\"25\">25</option>\n<option value=\"26\">26</option>\n<option value=\"27\">27</option>\n<option value=\"28\">28</option>\n<option value=\"29\">29</option>\n<option value=\"30\">30</option>\n<option value=\"31\">31</option>\n</select><span>/</span><!--\n--><select name=\"month\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.month : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<option value=\"\">Month</option>\n<option value=\"1\">January</option>\n<option value=\"2\">February</option>\n<option value=\"3\">March</option>\n<option value=\"4\">April</option>\n<option value=\"5\">May</option>\n<option value=\"6\">June</option>\n<option value=\"7\">July</option>\n<option value=\"8\">August</option>\n<option value=\"9\">September</option>\n<option value=\"10\">October</option>\n<option value=\"11\">November</option>\n<option value=\"12\">December</option>\n</select><span>/</span><!--\n--><select name=\"year\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.year : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<option value=\"\">Year</option>\n<option value=\"2014\">2014</option>\n<option value=\"2015\">2015</option>\n<option value=\"2016\">2016</option>\n<option value=\"2017\">2017</option>\n<option value=\"2018\">2018</option>\n<option value=\"2019\">2019</option>\n<option value=\"2020\">2020</option>\n<option value=\"2021\">2021</option>\n<option value=\"2022\">2022</option>\n<option value=\"2023\">2023</option>\n<option value=\"2024\">2024</option>\n<option value=\"2025\">2025</option>\n</select>\n</dd>\n</dl>\n</fieldset>\n<fieldset>\n<dl>\n<dt class=\"top-label\">\n<label for=\"description\">Description</label>\n</dt><!--\n--><dd>\n<textarea id=\"description\" name=\"description\" cols=\"5\" rows=\"8\"  placeholder=\"Description\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.description : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</textarea>\n</dd>\n</dl>\n</fieldset>\n<div class=\"container\">\n<input type=\"submit\" value=\"Save\"><!--\n-->"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.id : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n</div>\n</form>\n";
},"useData":true});

this["JST"]["todo_list"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<li data-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.isCompleted : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "")
    + ">\n<form class=\"check\" action=\"#\" method=\"post\">\n<label class=\"box\">\n<input type=\"submit\">\n</label>\n</form>\n<label class=\"todo_label\">\n"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + " - "
    + alias4(((helper = (helper = helpers.category || (depth0 != null ? depth0.category : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"category","hash":{},"data":data}) : helper)))
    + "\n</label>\n<form class=\"delete\" action=\"#\" method=\"post\">\n<label>\n<input type=\"submit\">\n</label>\n</form>\n</li>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "class=\"todo checked\"\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "class=\"todo\"\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<section>\n<header>\n<h1>"
    + alias4(((helper = (helper = helpers.category || (depth0 != null ? depth0.category : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"category","hash":{},"data":data}) : helper)))
    + "</h1>\n<p class=\"count\">"
    + alias4(((helper = (helper = helpers.count || (depth0 != null ? depth0.count : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"count","hash":{},"data":data}) : helper)))
    + "</p>\n</header>\n<p><a class=\"add\" href=\"#\">Add new to do</a></p>\n<div class=\"container\">\n<ul>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.todos : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul>\n</div>\n</section>\n";
},"useData":true});