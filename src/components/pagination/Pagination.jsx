/* eslint-disable jsx-a11y/anchor-is-valid */
export default function Pagination() {
    return (
        <div class="pagination-area">
        <div class="pagination-number">
            <ul>

                <li class="active">
                    <a>1</a>
                </li>
                <li>
                    <a>2</a>
                </li>
                <li>
                    <a>3</a>
                </li>
                <li>
                    <a>...</a>
                </li>
                <li>
                    <a>10</a>
                </li>
                <li>
                    <a title="Next">
                        <i class="fa fa-angle-right"></i>
                    </a>
                </li>
            </ul>
        </div>
    </div>
    )
}