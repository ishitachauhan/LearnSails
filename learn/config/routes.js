/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

const LearnController = require("../api/controllers/LearnController");

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': { view: 'pages/homepage' },
  'GET /learn/list' : {view: 'pages/list'},
  'GET /learn/add'  :{view: 'pages/add'},
  'GET /learn/name' :{controller:"Learn",action:"list"},
  'POST /learn'     :{controller:"Learn",action:"list2"},
  'DELETE /learn/:id' :{controller:"Learn",action:"list3"},
  'GET /students':{controller:"Learn",action:"list4"},
  'POST /students': {controller:"Learn",action:"createStudent"},
  'GET /category':{controller:"Learn",action:"readDevice"},
  'POST /category':{controller:"Learn",action:"createDevice"}
  // 'GET /test2': 'LearnController.list',
  // 'GET /test3': 'LearnController.list2'

  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
