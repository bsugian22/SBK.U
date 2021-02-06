import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchProps } from '../../redux/store'

const Pagination = (props) =>
{
    return (
        <div class="pagination flex-inherit widthp-100 heightp-100">
            <div class="select">
                <select name="slct" id="slct">
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                    <option value="">4</option>
                    <option value="">5</option>
                    <option value="">6</option>
                    <option value="">7</option>
                </select>
            </div>
            <div class="flex margin-left-5 page grow-2 justify-content-end">
                <a href="/sports?offset=-100"><button class="page-left width-40 heightp-100 background-transparent-b-20 margin-right-5"><i class="fas fa-chevron-left margin-0 color-grey"></i></button></a>
                <a href="/sports?offset=100"><button class="page-right width-40 heightp-100 background-transparent-b-20"><i class="fas fa-chevron-right margin-0 color-grey"></i></button></a>
            </div>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchProps)(Pagination)