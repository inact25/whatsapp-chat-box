import React from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from 'pixa-simple-ckeditor5'
import './WhatsappEditor.css'
import {WhatsappEditorTypes} from "./WhatsappEditor.types";

const WhatsappEditor: React.FC<WhatsappEditorTypes> = ({ onChange, value }) => {
    return (
        <CKEditor
            editor={ClassicEditor}
            data={value}
            onChange={( editor: any) => {
                const data = editor.getData()
                const position =
                    editor.editing.view.document.selection._ranges[0].start.offset
                if (onChange) {
                    onChange(data, position)
                }
            }}
        />
    )
}

export default WhatsappEditor