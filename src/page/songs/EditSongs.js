import {Field, Form, Formik} from "formik";
import {useNavigate, useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {editSong} from "../../services/songsService";

export default function EditSongs() {
    let {id} = useParams()
    let dispatch = useDispatch()
    let navigator = useNavigate()
    let song = useSelector(state => {
        return state.songs.songs.filter(i => i.id == id)
    })
    let handleEdit = async (id, value) => {
        await dispatch(editSong({id, value}))

    }
    return (
        <>
            <span>  Edit Song</span>
            <Formik
                initialValues={
                    song[0]
                }
                onSubmit={(value) => {
                    handleEdit(song[0].id, value).then(()=>{
                        navigator('/')
                    })
                }}>

                <Form>
                    Name:<br/> <Field name={'name'}/> <br/>
                    Like:<br/> <Field name={'likes'}/> <br/>
                    Listens:<br/> <Field name={'listens'}/> <br/>
                    Note:<br/> <Field name={'note'}/> <br/>
                    <button style={{marginTop: 10, width: 70}} type={"submit"}>Edit</button>
                </Form>
            </Formik>
        </>
    )
}