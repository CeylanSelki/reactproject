import Header from './Header'

export default function PostDetail({ title, subTitle, imgUrl, body }) {
    return (
        <>
            <Header title={title} subTitle={subTitle} imgUrl={imgUrl} />
            <article className="mb-4">
                <div className="container px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-8 col-xl-7" dangerouslySetInnerHTML={{__html: body}} />
                    </div>
                </div>
            </article>
        </>
    )
}