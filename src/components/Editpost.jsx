import { useActionData, useLoaderData, useNavigate, useNavigation } from "react-router-dom"
import { UseAuth } from "../hook/UseAuth";
import { UpdatePost } from "./UpdatePost";

export const Editpost = () => {

    const data = useActionData()
    const { post, id } = useLoaderData()
    const navigation = useNavigation()

    const navigate = useNavigate();
    const { signout } = UseAuth();

    return (
        <div>
            {data?.message && <div style={{ color: 'blue' }}>{data.message}</div>}
            <h1>Edit post {id}</h1>
            <button onClick={() => signout(() => navigate('/', { replace: true }))}>Log out</button>
            <UpdatePost {...post} submitting={navigation.state === 'submitting'} />
        </div>
    )
}

const updatePost = async (post) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${post.get('id')}`, {
        method: 'PUT',
        body: post
    })
    return res.json()
}

export const updatePostAction = async ({ request }) => {
    const formData = await request.formData();

    if (!formData.get('title') || !formData.get('body')) {
        return { message: 'All field are required!!!' }
    }

    const updatedPost = await updatePost(formData)

    return { message: `Post ${updatedPost.id} was successfully updated` }
}