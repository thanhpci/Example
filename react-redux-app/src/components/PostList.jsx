import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../features/postsSlice';
import { Row, Col, Card } from 'antd';
import './styles.css';

const PostList = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div className="post-list">
      <Row gutter={[16, 16]}>
        {posts.map((post) => (
          <Col span={12} key={post.uuid}>
            <Card 
              title={`Post by User ${post.userId}`} 
              bordered={true}
              bodyStyle={{ height: '250px', overflow: 'hidden'}} 
            >
              <p className="post-card-title"><strong>Post Title:</strong> {post.title}</p>
              <p><strong>Post ID:</strong> {post.id}</p>
              <p><strong>Body:</strong> {post.body}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default PostList;
