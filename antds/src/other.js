
import React, { Component } from 'react';
import { Button } from 'antd';
import './App.css';
var Other=React.createClass({
	render:function(){
		return(
			 <div>
		    <Button type="primary">Primary</Button>
		    <Button>Default</Button>
		    <Button type="dashed">Dashed</Button>
		    <Button type="danger">Danger</Button>
		  </div>
			
		)
	}
})



export default Other;