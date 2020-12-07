import express from 'express';
import FeedItemModel from './models/FeedItemModel';

const app = express();
const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`⚡[server]: Server is running at http://localhost:${port}`);
});

const controllerFeed = (req: any, res: any) => {
  const response = new Array<FeedItemModel>(
    {
      user: {
        name: 'Channel Mobile Dev',
        avatar: 'https://source.unsplash.com/random/800x600'
      },
      post: {
        id: 12345,
        title: 'Example overkill desk',
        photo:
          'https://cdn.shopify.com/s/files/1/0338/5360/3885/products/embody_prd_gallery_nevi_05_2x_0a3fc5a7-d667-4f5f-88a6-1b918ef56017_1280x1280.jpg'
      }
    },
    {
      user: {
        name: 'Channel Mobile Dev',
        avatar: 'https://source.unsplash.com/random/800x600'
      },
      post: {
        id: 54321,
        title: 'Example overkill desk',
        photo:
          'https://cdn.shopify.com/s/files/1/0338/5360/3885/products/embody_prd_gallery_nevi_05_2x_0a3fc5a7-d667-4f5f-88a6-1b918ef56017_1280x1280.jpg'
      }
    }
  );

  res.json(response);

  console.log('GET /feed/ success');
};

const handleErrors = (err: any) => {
  if (err) {
    return console.error(err);
  }
};

app.get('/feed/', controllerFeed);
app.on('error', handleErrors);
app;
