import React from 'react'
import { getUserInfo } from '../../../lib/kinde/server-actions';

const PostAuthorInfo = async({authorId}:{authorId: string}) => {
    const userInfo = await getUserInfo(authorId);
    let err: string | null = null;

    if(userInfo.success == false) {
        err = "Problem getting user credtials"
    }
  return (<>{err ?? `By ${userInfo.given_name ?? ""} ${userInfo.family_name ?? ""}`}</>)
}

export default PostAuthorInfo