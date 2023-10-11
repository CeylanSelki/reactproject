import Header from './Header'
import { NavLink } from 'react-router-dom'

function PostItem({ title, subTitle, slug, author, authorSlug, publishDate }) {
    return (
        <>
            {/* <!-- Post preview--> */}
            <div className="post-preview">
                <NavLink to={slug}>
                    <h2 className="post-title">{title}</h2>
                    <h3 className="post-subtitle">{subTitle}</h3>
                </NavLink>
                <p className="post-meta">
                    <a href={authorSlug}>{author}</a> tarafından {publishDate} tarihinde paylaşıldı
                </p>
            </div>
            {/* <!-- Divider--> */}
            <hr className="my-4" />
        </>
    )
}

export default function Posts() {
    return (
        <>
            <Header />
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-7">

                        <PostItem title={'Merhaba Dünya'} subTitle={'Bu benim ilk yazım'} slug={'/merhaba-dunya'} publishDate={'11 Ekim 2023'} author={'Ceylan SELKİ'} authorSlug={'/yazar/orhan-ekici'} />
                        
                        {/* <!-- Pager--> */}
                        {/* <div className="d-flex justify-content-end mb-4"><a className="btn btn-primary text-uppercase" href="#!">Older Posts →</a></div> */}
                    </div>
                </div>
            </div>
        </>
        
    )
}