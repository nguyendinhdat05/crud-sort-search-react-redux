import {Field, Form, Formik} from "formik";
import {useDispatch} from "react-redux";
import {addSong} from "../../services/songsService";
import {useNavigate} from "react-router";

export default function AddSongs() {
    let dispatch = useDispatch();
    let navigate = useNavigate()
    let handleAdd =  async (data) => {
      await dispatch(addSong(data))
    }
    return (
        <>
            <span>  Create Song</span>
            <Formik
                initialValues={{
                    name: '',
                    likes: '',
                    listens: '',
                    note: '',
                }}
                onSubmit={ async (data) => {
                  await  handleAdd(data).then(()=>{
                        navigate('/')
                    })
                }}>
                <Form>
                    Name:<br/> <Field name={'name'}/> <br/>
                    Like:<br/> <Field name={'likes'}/> <br/>
                    Listens:<br/> <Field name={'listens'}/> <br/>
                    Note:<br/> <Field name={'note'}/> <br/>
                    <button style={{marginTop: 10, width: 70}} type={"submit"}>Save</button>
                </Form>
            </Formik>
        </>
    )
}