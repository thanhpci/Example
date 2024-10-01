import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../features/postsSlice';
import { Form, Input, Button, Card } from 'antd';
import './styles.css';

const PostForm = () => {
  const [inputId, setInputId] = useState('');
  const [userId, setUserId] = useState('');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (inputId && userId && title && body) {
      dispatch(addPost({
        id: Number(inputId),
        userId: Number(userId),
        title,
        body
      }));
      setInputId('');
      setUserId('');
      setTitle('');
      setBody('');
    }
  };

  return (
    <Card className="post-form" title="Create a New Post"> 
      <Form layout="vertical" onFinish={handleSubmit}>
        <Form.Item label="Post ID" required>
          <Input 
            type="number" 
            value={inputId} 
            onChange={(e) => setInputId(e.target.value)} 
            placeholder="Enter post ID" 
            required
          />
        </Form.Item>
        <Form.Item label="User ID" required>
          <Input 
            type="number" 
            value={userId} 
            onChange={(e) => setUserId(e.target.value)} 
            placeholder="Enter user ID" 
            required 
          />
        </Form.Item>
        <Form.Item label="Title" required>
          <Input 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            placeholder="Enter post title" 
            required 
          />
        </Form.Item>
        <Form.Item label="Body" required>
          <Input.TextArea 
            value={body} 
            onChange={(e) => setBody(e.target.value)} 
            placeholder="Enter post body" 
            required 
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">Add Post</Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default PostForm;
