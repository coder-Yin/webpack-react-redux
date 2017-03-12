import './app.scss?p6_nomodule';
import React from 'react';
import ReactDOM from 'react-dom';
import BottomOps from 'bottom-ops';
import template from './template.html';

ReactDOM.render(
	<BottomOps type={2} />,
  document.getElementById('bottom-ops')
);

$('#root').html(template);
$('#user_img').attr("src",'http://www.nahehuo.com/thumb/b/3/82/39288_big.jpg')
