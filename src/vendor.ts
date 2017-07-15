// zone 为异步任务提供hook支持，主要应用于提高脏检查效率和降低性能损耗
// reflect-metadata 为Decorator提供反应射API，注意:Decorator是ES6的提案
import "zone.js";
import "reflect-metadata";

import "@angular/core";
import "@angular/platform-browser";
import "@angular/platform-browser-dynamic";
import "@angular/common";
import "@angular/compiler";
import "@angular/forms";
import "@angular/http";
import "@angular/router";