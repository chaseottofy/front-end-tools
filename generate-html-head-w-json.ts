type MetaOgContent = {
  title: string;
  description: string;
  site_name: string;
  url: string;
};

type MetaContent = {
  [key: string]: string | string[] | { [key: string]: string; };
};

type LinkContent = {
  rel: string;
  type?: string;
  href: string;
};

type HeadData = {
  meta: MetaContent;
  links: LinkContent[];
};

function createMetaTagString(key: string, value: string | string[]): string {
  if (Array.isArray(value)) {
    // Join the array into a comma-separated list
    value = value.join(', ');
  }
  return `  <meta name="${key}" content="${value}">\n`;
}

function createMetaOgTagString(key: string, value: string): string {
  return `  <meta property="og:${key}" content="${value}">\n`;
}

function createLinkTagString(link: LinkContent): string {
  const typeAttr = link.type ? ` type="${link.type}"` : '';
  return `  <link rel="${link.rel}"${typeAttr} href="${link.href}">\n`;
}

function headElementToJson(headData: HeadData): string {
  let headHTML = '';

  // Process meta tags
  for (const [key, value] of Object.entries(headData.meta)) {
    if (key === 'og') {
      if (typeof value === 'object' && value !== null) {
        for (const [ogKey, ogValue] of Object.entries(value)) {
          headHTML += createMetaOgTagString(ogKey, ogValue as string);
        }
      }
    } else {
      headHTML += createMetaTagString(key, value as string | string[]);
    }
  }

  // Process link tags
  headData.links.forEach((link) => {
    headHTML += createLinkTagString(link);
  });

  return `<head>\n\n${headHTML}\n</head>`;
}

// Example data
const headData: HeadData = {
  "meta": {
    "title": "project title",
    "description": "project description",
    "keywords": ["project", "keywords"],
    "author": "chase ottofy",
    "color-scheme": "dark",
    "theme-color": "#000000",
    "og": {
      "title": "project title",
      "description": "project description",
      "site_name": "project title",
      "url": "https://ottofy.dev"
    },
    "viewport": "width=device-width, initial-scale=1.0"
  },
  "links": [
    {
      "rel": "icon",
      "type": "image/svg+xml",
      "href": "/favicon.svg"
    },
    {
      "rel": "stylesheet",
      "href": "/src/index.css"
    },
  ]
};

console.log(headElementToJson(headData));
/*
OUTPUT:
<head>
  <meta name="title" content="project title">
  <meta name="description" content="project description">
  <meta name="keywords" content="project, keywords">
  <meta name="author" content="chase ottofy">
  <meta name="color-scheme" content="dark">
  <meta name="theme-color" content="#000000">
  <meta property="og:title" content="project title">
  <meta property="og:description" content="project description">
  <meta property="og:site_name" content="project title">
  <meta property="og:url" content="https://ottofy.dev">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="icon" type="image/svg+xml" href="/favicon.svg">
  <link rel="stylesheet" href="/src/index.css">
</head>
*/
