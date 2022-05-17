import React from 'react';
import { useStore, useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from '@/store';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { setMsg } from '@/store/routineSlice';

function Redux() {
  const store = useStore();
  // 直接使用useDispatch
  const dispatch = useDispatch<AppDispatch>();
  // 使用定义好类型的useDispatch
  const dispatch1 = useAppDispatch();

  // 直接使用useSelector
  const msg1 = useSelector((state: RootState) => state.routine.msg);
  // 使用定义好类型的useSelector，不需要单独引入RootState
  const msg2 = useAppSelector(state => state.routine.msg);

  const updateMsg = () => {
    store.dispatch(setMsg('zaq'));
  };

  const updateMsg2 = () => {
    dispatch(setMsg('lsq'));
  };

  const updateMsg3 = () => {
    dispatch({
      type: 'routine/setMsg',
      payload: 'giegie'
    });
  };

  const updateMsg4 = () => {
    dispatch1(setMsg('lsq'));
  };

  return (
    <div id="aaaa" className="App">
      <p>{msg1}</p>
      <p>{msg2}</p>
      <p onClick={updateMsg}>第1种方式更新msg</p>
      <p onClick={updateMsg2}>第2种方式更新msg</p>
      <p onClick={updateMsg3}>第3种方式更新msg</p>
      <p onClick={updateMsg4}>第4种方式更新msg</p>
    </div>
  );
}

export default Redux;
