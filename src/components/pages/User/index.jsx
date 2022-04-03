import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {getApiAllUserData} from '../../../modules/user';

const mapStateToProps = state => {
  const {
    users
  } = state.userReducer;
  return {
    users
  }};

const mapDispatchToProps = {
  getApiAllUserData,
}

function Index(props) {
  useEffect(() => {
    props.getApiAllUserData();
  }, []);
  return (
    <div>index</div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);