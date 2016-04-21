'use strict';

const express = require('express');
const Router = express.Router();

const Actions = require('./organisms/brain');

const _actions = ['create', 'find', 'update', 'delete'];
const _methods = ['post', 'get', 'put', 'delete'];
const _paths = ['/', '/', '/:id', '/:id'];
const _callbacks = [Actions.create, Actions.find, Actions.update, Actions.remove];


const routes = [
    {
      action: 'create'
    , method: 'post'
    , path: '/'
    , callback: Actions.create
    }
  , {
      action: 'find'
    , method: 'get'
    , path: '/'
    , callback: Actions.find
    }
  , {
      action: 'findOne'
    , method: 'get'
    , path: '/:id'
    , callback: Actions.findOne
    }
  , {
      action: 'update'
    , method: 'put'
    , path: '/:id'
    , callback: Actions.update
  }
  , {
      action: 'delete'
    , method: 'delete'
    , path: '/:id'
    , callback: Actions.remove
  }
];

routes.forEach( route => {
  Router[route.method](route.path, route.callback);
});

module.exports = Router;


