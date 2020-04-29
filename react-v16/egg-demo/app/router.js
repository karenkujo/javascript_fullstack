'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/test', controller.home.test);
  router.get('/user', controller.user.index);
  router.get('/getId/:id', controller.user.getId);
  router.get('/list', controller.home.list);
  router.post('/add', controller.home.add);
  router.post('/update', controller.home.update);
  router.get('/diaryById', controller.home.diaryById);
};