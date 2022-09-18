import EditorJS from '@editorjs/editorjs';
import Header from "@editorjs/header";
import {useEffect, useState} from "react";
import AlignmentTuneTool from 'editorjs-text-alignment-blocktune';
import ImageTool from '@editorjs/image';
import Delimiter from '@editorjs/delimiter';
import List from '@editorjs/list';
import Alert from 'editorjs-alert';
import Paragraph from '@editorjs/paragraph';
import CodeTool from '@editorjs/code';
import ToggleBlock from 'editorjs-toggle-block'

const initEditor = ({id, data, isReadOnly}) => {
    return  new EditorJS({
            holder: id,
            placeholder: 'هر آنچه دل تنگت خواست',
            readOnly: isReadOnly,
            tools: {
                header: {
                    class: Header,
                    inlineToolbar: true,
                    title: 'عنوان',
                    tunes: ['aligner'],
                    config: {
                        placeholder: 'عنوان',
                        levels: [1, 2, 3],
                        defaultLevel: 2,
                    }
                },
                paragraph: {
                    class: Paragraph,
                    inlineToolbar: true,
                    tunes: ['aligner'],
                },
                list: {
                    class: List,
                    inlineToolbar: true,
                },
                code: {
                    class: CodeTool
                },
                alert: {
                    class: Alert,
                    inlineToolbar: true,
                    config: {
                        messagePlaceholder: 'متن پیام',
                        defaultType: 'success',

                    }
                },
                image: {
                    class: ImageTool,
                    inlineToolbar: true,
                    config: {
                        endpoints: {}
                    }
                },
                toggle: {
                    class: ToggleBlock,
                },
                delimiter: {
                    class: Delimiter,
                    inlineToolbar: true,
                },
                aligner: {
                    class: AlignmentTuneTool,
                    config: {
                        default: "right",
                        blocks: {
                            header: 'right',
                            list: 'right',
                            code: 'left',
                        }
                    },
                }
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
                        List: 'لیست',
                        Text: 'متن',
                        Image: 'تصویر',
                        Delimiter: 'خط تقسیم',
                        Bold: 'درشت',
                        Italic: 'خمیده',
                        Link: 'لینک',
                        Filter: 'فیلتر',
                        Alert: 'هشدار',
                        Code: 'کد',
                        Toggle: 'تغییر',
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
                        },
                        list: {
                            title: 'لیست',
                        },
                        alert: {
                            title: 'هشدار',
                        },
                        code: {
                            title: 'کد',
                        },
                        toggle: {
                            'Toggle': 'تغییر بلوک',
                            'Empty toggle. Click or drop blocks inside.':
                                'تغییر خالی. بلوک ها را درونش بکشید یا کلیک کنید',
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


const GetEditor = ({data, isReadOnly, id}) => {
    const [editor, setEditor] = useState(null);
    useEffect(() => {
        setEditor((prevEditor) => {
            if (!prevEditor) {
                return initEditor({id, data, isReadOnly});
            }
            return null;
        });
    }, [id, editor, data, isReadOnly]);

    return (
        <div style={{marginTop: '2%'}} id={id}/>
    )
}
export default GetEditor;