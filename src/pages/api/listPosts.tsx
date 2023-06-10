import parseMD from "parse-md";

export type Post = {
  path: string,
  content: string,
  meta: {
    title: string,
    created: string,
  }
}

export type Data = {
  files: Post[]
}

async function getContent(path: string): Promise<string> {
  let content = await fetch("https://raw.githubusercontent.com/Prospect-Programming-Club/blogposts/main/" + path);
  let contentData = await content.text();
  return contentData;
}

export default async function handler(): Promise<Post[]> {
  let repoUrl = "https://api.github.com/repos/Prospect-Programming-Club/blogposts/git/trees/main?recursive=1/"
  let headers = new Headers();
  headers.set("Authorization", "Bearer " + (process.env.REACT_APP_GH_TOKEN ? process.env.REACT_APP_GH_TOKEN : "heyo"));
  let repo = await fetch(repoUrl, {
    headers: headers
  });
  let d = await repo.text();
  let repoData = JSON.parse(d);
  let files = [];
  for (let i = 0; i < repoData.tree.length; i++) {
    let file = repoData.tree[i];
    if (file.path.endsWith(".md") && !file.path.endsWith("README.md")) { 
      let content = await getContent(file.path);
      let parsed = parseMD(content);
      let meta = parsed.metadata as any; 
      files.push({
        path: file.path,
        content: parsed.content,
        meta: {
          title: parsed.metadata ? meta.title as string : "Untitled",
          created: parsed.metadata ? meta.created as string : "Unknown",
        },
      });
    }
  }

    
  return files;
}