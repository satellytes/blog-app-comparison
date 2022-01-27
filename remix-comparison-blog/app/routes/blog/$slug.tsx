import {MetaFunction, useLoaderData} from "remix";
import type { LoaderFunction } from "remix";
import {getPost, NewPost} from "../../util/posts";
import invariant from "tiny-invariant";
import {Layout} from "../../components/layout";
import {Navigation} from "../../components/navigation";

export const meta: MetaFunction = ({data}: { data: NewPost | undefined }) => {
    return {
        title: `${data?.title} | Remix Blog`,
    };
};

export const loader: LoaderFunction = async ({
                                                 params
                                             }) => {
    invariant(params.slug, "expected params.slug");
    return getPost(params.slug);
};

export default function PostSlug() {
    const post = useLoaderData();
    return (
        <Layout>
            <Navigation/>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </Layout>
    );
}