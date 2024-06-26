import { createMarkdownParser, rehypeHighlight, createShikiHighlighter } from '@nuxtjs/mdc/runtime';

import Nord from 'shiki/themes/nord.mjs';
import Monokai from 'shiki/themes/monokai.mjs';
import HtmlLang from 'shiki/langs/html.mjs';
import MdcLang from 'shiki/langs/mdc.mjs';
import TsLang from 'shiki/langs/typescript.mjs';
import VueLang from 'shiki/langs/vue.mjs';
import ScssLang from 'shiki/langs/scss.mjs';
import YamlLang from 'shiki/langs/yaml.mjs';
import BashLang from 'shiki/langs/bash.mjs';

export default function useMarkdownParser() {
  let parser: Awaited<ReturnType<typeof createMarkdownParser>>;

  const parse = async (markdown: string) => {
    if (!parser) {
      parser = await createMarkdownParser({
        rehype: {
          plugins: {
            highlight: {
              instance: rehypeHighlight,
              options: {
                // Pass in your desired theme(s)
                theme: 'nord',
                // Create the Shiki highlighter
                highlighter: createShikiHighlighter({
                  bundledThemes: {
                    monokai: Monokai,
                    nord: Nord,
                  },
                  // Configure the bundled languages
                  bundledLangs: {
                    html: HtmlLang,
                    mdc: MdcLang,
                    vue: VueLang,
                    yml: YamlLang,
                    scss: ScssLang,
                    ts: TsLang,
                    typescript: TsLang,
                    bash: BashLang,
                  },
                }),
              },
            },
          },
        },
      });
    }
    return parser(markdown);
  };

  return parse;
}
