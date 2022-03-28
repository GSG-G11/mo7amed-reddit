const connection = require('../../config');

const getPostsQuery = () => connection.query(
  `SELECT 
    p.id,
    p.title,
    p.description,
    p.image, 
    p.created_at, 
    u.username, 
    u.id as user_id ,
    (select count(*) from votes v where v.post_id = p.id and v.vote = true) - (select count(*) from votes v where v.post_id = p.id and v.vote = false) as votes_number,
    count(c.post_id) as comments 
    FROM posts p
   INNER JOIN users u
      ON u.id = p.user_id 
   LEFT JOIN comments c
      ON c.post_id = p.id
   group by p.id, u.username, u.id
   ORDER BY votes_number desc
   `,
);
module.exports = getPostsQuery;
