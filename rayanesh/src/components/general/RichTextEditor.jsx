import EditorJS from '@editorjs/editorjs';
import Header from "@editorjs/header";
import {useEffect, useId, useState} from "react";
import ImageTool from '@editorjs/image';
import Delimiter from '@editorjs/delimiter'
import SimpleImage from "@editorjs/simple-image";

const initEditor = ({id, data, isReadOnly}) => {
    return new EditorJS({
            holder: id,
            placeholder: 'هر آنچه دل تنگت خواست',
            readOnly: isReadOnly,
            tools: {
                delimiter: {
                    class: Delimiter,
                    inlineToolbar: true,
                },
                image: {
                    class: ImageTool,
                    inlineToolbar: true,
                    config: {
                        endpoints: {}
                    }
                },
                header: {
                    class: Header,
                    inlineToolbar: true,
                    title: 'عنوان',
                    config: {
                        placeholder: 'عنوان',
                    }
                },

            },

            i18n: {
                direction: 'rtl',
                messages: {
                    ui: {
                        'toolbar': {
                            'toolbox': {
                                'Add': 'افزودن',
                            }
                        },
                        'inlineToolbar': {
                            'converter': {
                                'Convert to': 'تبدیل به',
                            }
                        },
                        "blockTunes": {
                            "toggler": {
                                "Click to tune": "برای تنظیم کلیک کنید",
                            }
                        },
                    }
                    ,
                    toolNames: {
                        Heading: 'عنوان',
                        Text: 'متن',
                        Image: 'تصویر',
                        Delimiter: 'خط تقسیم',
                        Bold: 'درشت',
                        Italic: 'خمیده',
                        Link: 'لینک',
                        Filter: 'فیلتر',
                    },
                    tools: {
                        heading: {
                            title: 'عنوان',
                        },
                        text: {
                            title: 'متن',
                        },
                        image: {
                            title: 'تصویر',
                        },
                        delimiter: {
                            title: 'خط تقسیم',
                        },
                        link: {
                            title: 'لینک',
                        },
                        filter: {
                            title: 'فیلتر',
                        }
                    },
                    blockTunes: {
                        "delete": {
                            "Delete": 'حذف کن',
                        },
                        "moveUp": {
                            "Move up": 'بالا ببر',
                        },
                        "moveDown": {
                            "Move down": 'پایین ببر',
                        }
                    },
                },
                data: data
            }
        }
    );
}


const GetEditor = ({data, isReadOnly}) => {
    const id = useId();
    const [editor, setEditor] = useState(null);
    useEffect(() => {
        setEditor((prevEditor) => {
            if (!prevEditor) {
                return initEditor({id, data, isReadOnly});
            }
            return null;
        });
        return () => {
            if (editor) {
                editor.destroy();
            }
        };
    }, [id, editor, data, isReadOnly]);

    return (
        <div id={id}/>
    )
}
export default GetEditor;