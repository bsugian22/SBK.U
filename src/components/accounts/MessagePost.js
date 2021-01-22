import React from 'react'

export default function MessagePost()
{
    return (
        <div class="message-read-header flex-inherit flex-column align-items-center-inherit">
            <div class="title flex-inherit grow-2 background-transparent-b-20 widthp-100 padding-15">
                <span class="flex color-grey align-items-center text-ellipsis">
                    <span class="margin-left-5 color-white text-ellipsis">0</span>
                </span>
            </div>
            <div class="date flex-inherit grow-2 margin-bottom-10 background-transparent-b-10 widthp-100 padding-15">
                <span class="color-grey margin-right-15 align-items-center"><i class="fal fa-calendar-alt margin-right-5"></i>0</span>
                <span class="color-grey align-items-center"><i class="far fa-user-alt margin-right-5"></i>0</span>
            </div>
            <div class="flex-column message-read-content min-height-150 padding-10 background-transparent-b-10 color-grey">
                <div class="text">  
                    <p>0</p>
                </div>  
            </div>
        </div>
    )
}