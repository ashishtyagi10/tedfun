import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
  listAll,
} from 'firebase/storage'
import { storage } from './config'

function ensureStorage() {
  if (!storage) {
    throw new Error('Firebase Storage is not initialized. Check your environment variables.')
  }
  return storage
}

export async function uploadStudentPhoto(
  studentId: string,
  file: File,
  isPrimary: boolean = false
): Promise<string> {
  const filename = isPrimary
    ? 'primary.jpg'
    : `gallery_${Date.now()}.${file.name.split('.').pop()}`

  const storageRef = ref(ensureStorage(), `students/${studentId}/photos/${filename}`)

  const snapshot = await uploadBytes(storageRef, file, {
    contentType: file.type,
  })

  const downloadUrl = await getDownloadURL(snapshot.ref)
  return downloadUrl
}

export async function uploadStudentDocument(
  studentId: string,
  file: File,
  documentType: string
): Promise<string> {
  const filename = `${documentType}_${Date.now()}.${file.name.split('.').pop()}`
  const storageRef = ref(ensureStorage(), `students/${studentId}/documents/${filename}`)

  const snapshot = await uploadBytes(storageRef, file, {
    contentType: file.type,
  })

  const downloadUrl = await getDownloadURL(snapshot.ref)
  return downloadUrl
}

export async function uploadDonationProof(
  donationId: string,
  file: File
): Promise<string> {
  const filename = `proof_${Date.now()}.${file.name.split('.').pop()}`
  const storageRef = ref(ensureStorage(), `donations/${donationId}/proofs/${filename}`)

  const snapshot = await uploadBytes(storageRef, file, {
    contentType: file.type,
  })

  const downloadUrl = await getDownloadURL(snapshot.ref)
  return downloadUrl
}

export async function uploadCampaignImage(
  campaignId: string,
  file: File
): Promise<string> {
  const filename = `cover_${Date.now()}.${file.name.split('.').pop()}`
  const storageRef = ref(ensureStorage(), `campaigns/${campaignId}/${filename}`)

  const snapshot = await uploadBytes(storageRef, file, {
    contentType: file.type,
  })

  const downloadUrl = await getDownloadURL(snapshot.ref)
  return downloadUrl
}

export async function deleteFile(filePath: string): Promise<void> {
  const storageRef = ref(ensureStorage(), filePath)
  await deleteObject(storageRef)
}

export async function getStudentPhotos(studentId: string): Promise<string[]> {
  const listRef = ref(ensureStorage(), `students/${studentId}/photos`)

  try {
    const result = await listAll(listRef)
    const urls = await Promise.all(
      result.items.map((item) => getDownloadURL(item))
    )
    return urls
  } catch {
    return []
  }
}
