import { useState, type FC, type DragEvent, useRef } from 'react';
import { Button } from 'shared/ui/button/Button';
import { Typography } from 'shared/ui/typography/Typography';
import { X, Upload, FileText, File } from 'lucide-react';
import styles from './UploadModal.module.scss';

interface UploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUpload: (files: File[]) => void;
}

interface UploadedFile {
  file: File;
  id: string;
}

export const UploadModal: FC<UploadModalProps> = ({ onClose, onUpload }) => {
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const allowedTypes = [
    'text/plain', // txt
    'application/pdf', // pdf
    'application/msword', // doc
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document', // docx
  ];

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(false);

    const files = Array.from(e.dataTransfer.files);
    addFiles(files);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    addFiles(files);
  };

  const addFiles = (files: File[]) => {
    const validFiles = files.filter((file) => allowedTypes.includes(file.type));

    const newFiles: UploadedFile[] = validFiles.map((file) => ({
      file,
      id: Math.random().toString(36).substr(2, 9),
    }));

    setUploadedFiles((prev) => [...prev, ...newFiles]);
  };

  const removeFile = (id: string) => {
    setUploadedFiles((prev) => prev.filter((f) => f.id !== id));
  };

  const handleUpload = () => {
    const files = uploadedFiles.map((f) => f.file);
    onUpload(files);
    setUploadedFiles([]);
    onClose();
  };

  const getFileIcon = (file: File) => {
    if (file.type === 'text/plain') return <FileText size={20} />;
    if (file.type === 'application/pdf') return <File size={20} />;
    return <File size={20} />;
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className={styles.uploadModal}>
      <div className={styles.header}>
        <Typography variant='h3'>Upload Documents</Typography>
        <Button variant='grey' size='short' onClick={onClose}>
          <X size={16} />
        </Button>
      </div>

      <div
        className={`${styles.dropZone} ${isDragOver ? styles.dragOver : ''}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
      >
        <Upload size={48} className={styles.uploadIcon} />
        <Typography variant='bodyText' className={styles.dropText}>
          Drag & drop files here or click to browse
        </Typography>
        <Typography variant='smallText' color='grey03'>
          Supported: TXT, PDF, DOC, DOCX
        </Typography>
        <input
          ref={fileInputRef}
          type='file'
          multiple
          accept='.txt,.pdf,.doc,.docx'
          onChange={handleFileSelect}
          style={{ display: 'none' }}
        />
      </div>

      {uploadedFiles.length > 0 && (
        <div className={styles.fileList}>
          <Typography variant='bodyText2' weight='semiBold'>
            Files to upload ({uploadedFiles.length})
          </Typography>
          {uploadedFiles.map((uploadedFile) => (
            <div key={uploadedFile.id} className={styles.fileItem}>
              {getFileIcon(uploadedFile.file)}
              <div className={styles.fileInfo}>
                <Typography variant='bodyText2' truncate={30}>
                  {uploadedFile.file.name}
                </Typography>
                <Typography variant='smallText' color='grey03'>
                  {formatFileSize(uploadedFile.file.size)}
                </Typography>
              </div>
              <Button
                variant='grey'
                size='short'
                onClick={() => removeFile(uploadedFile.id)}
              >
                <X size={14} />
              </Button>
            </div>
          ))}
        </div>
      )}

      <div className={styles.actions}>
        <Button variant='outlined' onClick={onClose}>
          Cancel
        </Button>
        <Button
          variant='primary'
          onClick={handleUpload}
          disabled={uploadedFiles.length === 0}
        >
          Upload {uploadedFiles.length > 0 && `(${uploadedFiles.length})`}
        </Button>
      </div>
    </div>
  );
};
