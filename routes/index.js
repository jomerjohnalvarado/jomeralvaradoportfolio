import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', {
    title: 'Home',
    page: 'home'
  });
});

router.get('/about', (req, res) => {
  res.render('about', {
    title: 'About Me',
    page: 'about'
  });
});

router.get('/skills', (req, res) => {
  res.render('skills', {
    title: 'My Skills',
    page: 'skills'
  });
});

router.get('/projects', (req, res) => {
  res.render('projects', {
    title: 'My Projects',
    page: 'projects'
  });
});

router.get('/contact', (req, res) => {
  res.render('contact', {
    title: 'Contact Me',
    page: 'contact'
  });
});

export default router;