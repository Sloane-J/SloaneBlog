# My Hugo Blog

This is a simple blog built with [Hugo](https://gohugo.io/), a fast and flexible static site generator. The blog is designed for content creation and sharing, with a focus on simplicity and customization.

## Features

- **Fast and Simple Setup**: Hugo provides a fast development environment, and the blog is easy to set up and extend.
- **Customizable Design**: Built using a custom theme (or pre-built theme if you prefer).
- **Markdown Support**: Create blog posts and pages with Markdown.
- **SEO Optimized**: Built with SEO best practices in mind.
- **RSS Feed**: Auto-generated RSS feed for your blog posts.

## Requirements

- [Hugo](https://gohugo.io/getting-started/installing/) (version X.X.X or higher)
- A text editor or IDE of your choice
- [Git](https://git-scm.com/) (optional, for version control)

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/your-hugo-blog.git
   cd your-hugo-blog
   ```

2. **Install Hugo** (if you haven't installed it already):
   Follow the [installation guide](https://gohugo.io/getting-started/installing/) to install Hugo.

3. **Start Hugo server**:
   Run the following command to start the local development server:
   ```bash
   hugo server
   ```

   Your site will be live at `http://localhost:1313`.

## Configuration

- The blog configuration is stored in `config.yaml`. You can adjust site settings like the title, theme, and social media links there.
  
  Example:
  ```yaml
  baseURL: "http://example.com/"
  languageCode: "en-us"
  title: "My Hugo Blog"
  theme: "your-theme"
  ```

## Creating Content

To create a new blog post, run:
```bash
hugo new posts/my-first-post.md
```

This will create a new markdown file in `content/posts`. You can then edit it with your content.

## Themes

If you'd like to change the theme, you can find various Hugo themes at [themes.gohugo.io](https://themes.gohugo.io/). To add a new theme:

1. Clone the theme into the `themes` directory:
   ```bash
   git submodule add https://github.com/theme-author/theme-name.git themes/theme-name
   ```

2. Update the `config.yaml` to use the new theme:
   ```yaml
   theme: "theme-name"
   ```

## Deployment

To deploy your Hugo site, simply build it by running:
```bash
hugo
```

This will generate the static site in the `public` directory. You can then upload the contents of the `public` directory to your hosting platform (Netlify, GitHub Pages, etc.).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
