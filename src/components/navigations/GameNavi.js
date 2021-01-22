import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

export default function GameNavi(props)
{
    return (
        <div class="games-main-category flex flex-column flex-inherit width-300 border-right">
            <div class="category-item border-bottom background-transparent-b-15">
                <a href="#" class="flex-inherit">
                    <div class="icon padding-left-20">
                        <i class="pi-color-icon-dhlottery"></i>
                    </div>
                    <div class="flex-column flex-inherit flex padding-left-10">
                        <div>
                            <span class="color-grey">MINIGAME</span>
                        </div>
                        <div>
                            <span class="color-grey">동행복권</span>
                        </div>
                    </div>
                </a>
            </div>
            <div class="category-item border-bottom border-top background-transparent-b-15">
                <a href="#" class="flex-inherit active">
                    <div class="icon padding-left-20">
                        <i class="pi-color-icon-ntry"></i>
                    </div>
                    <div class="flex-column flex-inherit flex padding-left-10">
                        <div>
                            <span class="color-grey">MINIGAME</span>
                        </div>
                        <div>
                            <span class="color-grey">엔트리게임</span>
                        </div>
                    </div>
                </a>
            </div>
            <div class="category-item border-bottom border-top background-transparent-b-15">
                <a href="#" class="flex-inherit">
                    <div class="icon padding-left-20">
                        <i class="pi-color-icon-lotus"></i>
                    </div>
                    <div class="flex-column flex-inherit flex padding-left-10">
                        <div>
                            <span class="color-grey">MINIGAME</span>
                        </div>
                        <div>
                            <span class="color-grey">로투스</span>
                        </div>
                    </div>
                </a>
            </div>
            <div class="category-item border-top">
            </div>
        </div>
    )
}