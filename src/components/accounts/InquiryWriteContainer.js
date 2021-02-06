import React from 'react'

export default function InquiryWrite()
{
    return (
        <div class="write widthp-100 flex flex-inherit flex-column ">
            <div class="title background-transparent-b-20 margin-bottom-10 height-40">
                <input type="text" class="flex color-grey heightp-100 widthp-100 padding-horizontal-10" name="post_title" placeholder="제목을 입력해주세요" />
            </div>
            <div class="editor margin-bottom-10 min-height-200">
                <textarea type="text" class="display-none" name="post_content"></textarea>
            </div>
            <div class="button-wrap height-40 justify-content-center">
                <button type="submit" class="btn-0 padding-horizontal-15 background-green color-white margin-right-10 "><i class="far fa-pencil margin-right-5"></i>작성완료</button>
            </div>
        </div>
    )
}