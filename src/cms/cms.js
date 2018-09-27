import CMS from 'netlify-cms'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import EventPostPreview from './preview-templates/EventPostPreview'
import Tagebuch2018PostPreview from './preview-templates/Tagebuch2018PostPreview'
import ProductPagePreview from './preview-templates/ProductPagePreview'

CMS.registerPreviewStyle('/styles.css')
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('products', ProductPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
CMS.registerPreviewTemplate('event', EventPostPreview)
CMS.registerPreviewTemplate('tagebuch2018', Tagebuch2018PostPreview)
